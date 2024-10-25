import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function GET(request: Request) {
  return NextResponse.json({ message: "Hello, World!" });
}

export async function POST(request: Request) {
  const data = await request.formData(); // Parses the JSON body
  const province = data.get("province");
  const district = data.get("district");
  const ward = data.get("ward");
  const address = data.get("address");
  const phoneNumber = data.get("phoneNumber");
  const username = data.get("username");
  const amount = data.get("amount");

  if (!province || !district || !ward || !address || !phoneNumber || !amount) {
    return NextResponse.json({ error: "Missing field required ." }, { status: 400 });
  }
  console.log("AMOUNT", amount);
  let renderTextForAmount =
    Number(amount) > 1 ? "Đặt 2 sản phẩm giá 530.000đ (Miễn phí ship) " : "Đặt 1 sản phẩm giá 269.000đ và 20k ship (Tổng 229.000đ)";
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Replace with your SMTP server
    port: 465, // Replace with the appropriate port
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Your email user
      pass: process.env.PASS_APP, // Your email password
    },
  });
  const emailSend = "tuilanguyencuong1997@gmail.com";
  const subject = "Đơn Đặt hàng !!!";

  const date = new Date();
  const formattedDate = date.toLocaleString("vi-VN", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false, // Set to true for 12-hour format
  });
  // data?.getReader.
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender address
      to: emailSend, // List of recipients
      subject: subject, // Subject line
      html: `
     <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
  <h2 style="color: #333;">Anh/Chị có tên <strong style ="color:red">( ${username} )</strong> đã đặt hàng </h2>
  
  <h3 style="color: #0070f3;">Thông Tin Đơn Hàng:</h3>
  <p><strong>Ngày và Giờ Đặt Hàng:</strong> ${formattedDate}</p>

   <p style = "margin-bottom:"10px""><strong>Địa chỉ:</strong> ${address}, ${ward}, ${district}, ${province} . </p>
  
   <p style = "margin-bottom:"10px""><strong>Số điện thoại:</strong> ${phoneNumber}</p>
  
  <div style="padding: 10px; border: 1px solid #ccc; border-radius: 5px; background-color: #fff;">
    <h4 style="margin: 0;">Sản Phẩm:</h4>
    <div style="margin-top: 10px;">
      <img src="https://dathangsi.vn/upload/products/2017/06/0717-dai-deo-massage-lung-vai1.jpg" alt="sanphamdathang" style="width: 100px; height: auto; margin-right: 10px; vertical-align: middle;" />
    </div>

    <div> <strong style ="margin-bottom:"15px"">Máy massage vai gáy cổ </strong> </div>
     
    <div> <strong style = "color:red">${renderTextForAmount}</strong></div>
     
 
  </div>

 
</div>
    `,
    });

    return NextResponse.json({ message: "Đặt hàng thành công !" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
