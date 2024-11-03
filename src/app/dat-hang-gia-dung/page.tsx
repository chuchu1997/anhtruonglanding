// "use client";
// import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { IconThumbUpFilled, IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";

const DynamicSectionWrapper = dynamic(() => import("@/components/Section"), {});

// 340988835742906
const DatHangGiaDung = () => {
  interface propsIconStar {
    className?: string;
  }
  interface propsComment {
    className?: string;
    userName: string;
    userAvatarUrl: string;
    timeComments: string;
    numberLikes: string;
    comment: string;
  }
  // useEffect(() => {
  //   import("react-facebook-pixel")
  //     .then((x) => x.default)
  //     .then((ReactPixel) => {
  //       ReactPixel.init("340988835742906"); // facebookPixelId
  //       ReactPixel.pageView();
  //     });
  // }, []);
  const RenderIconStar = (props: propsIconStar) => {
    const { className } = props;

    return <IconStarFilled size={"20px"} className={`${className} `} />;
  };
  const RenderComment = ({ className, userName, userAvatarUrl, timeComments, numberLikes, comment }: propsComment) => {
    return (
      <div className={`content-wrapper flex gap-4 items-start mt-[30px] ${className}`}>
        <Image src={userAvatarUrl} className="bg-[grey] rounded-full" alt="avatar" width={50} height={50} quality={100} />
        <div className="right-side">
          <div className="font-bold text-[16px]">{userName}</div>
          <div className="text-[15px]">{comment} </div>
          <div className="text-[15px] flex gap-1 mt-[20px]">
            {Array.from({ length: 5 }, (value, i) => (
              <RenderIconStar key={i} className="text-yellow-400" />
            ))}
          </div>
          <div className="text-[14px] text-blue-400 mt-[10px] flex gap-2 items-center">
            <p>Thích</p>
            <p>Phản hồi</p>
            <div className="bg-blue-400 rounded-full p-1  flex items-center ">
              <IconThumbUpFilled size={18} color={"white"} />
            </div>

            {numberLikes && <div className="mr-2">{numberLikes}</div>}

            <p>{timeComments} </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <DynamicSectionWrapper className="mb-[40px]" titleSection="thông tin sản phẩm">
        <div className="info-product flex flex-col gap-9">
          <div className="relative h-[460px] md:h-[1000px] w-full">
            <Image src="/thuoctrihoinach/1.jpg" fill alt="maymassagecovaigay" className="md:object-contain object-cover" priority></Image>
          </div>

          <div className="content-1 ">
            <strong className="text-[#666666] text-[15px] mb-[10px]">Thuốc điều trị hôi nách và hôi chân ( Được làm bằng thảo dược )</strong>

            <div className="text-[14px]">
             <ul>
              <li>✅ Thành phần hoàn toàn tự nhiên: Được chiết xuất từ các loại thảo dược quý hiếm, an toàn cho làn da, giúp ngăn ngừa mồ hôi và khử mùi hiệu quả mà không gây kích ứng.</li>
              <li>✅ Hiệu quả tức thì: Chỉ sau 5 ngày sử dụng, bạn sẽ không còn lo lắng về 𝑯𝒐̂𝒊 𝑵𝒂́𝒄𝒉 𝑽𝒂̀ 𝑯𝒐̂𝒊 𝑪𝒉𝒂̂𝒏 , mang lại sự tự tin cho bạn trong mọi hoạt động.</li>
              <li>✅ Công thức độc quyền: Kết hợp giữa các thành phần thiên nhiên giúp kiểm soát mồ hôi, kháng khuẩn và làm dịu da, mang lại cảm giác thoải mái suốt cả ngày.</li>
              <li>✅ Dễ sử dụng: Sau khi tắm xong chỉ cần lấy 1 lát chanh xoa lên vùng bị hôi sau đó thoa bột của sản phẩm vào .</li>

             </ul>
            </div>
          </div>
{/* 
          <div className="content-2 ">
            <strong className="text-[#666666]">Ưu điểm sản phẩm</strong>
            <div className="text-[14px]">
              <ul>
                <li>- Tiện lợi tuyệt đối cho gia đình nhỏ </li>
                <li>- Có thể nấu mì </li>
                <li>- Có thể nấu lẩu</li>
                <li>- Có thể hấp</li>
              </ul>
            </div>
          </div> */}
          {/* <div className="content-3 ">
            <strong className="text-[#666666]">Thông số kỹ thuật:</strong>
            <div className="text-[14px]">
              <ul>
                <li>- Điện áp: AC 220V-240V</li>
                <li>- Tần số: 50-60Hz</li>
                <li>- Công suất: 45W</li>
                <li>- Kích thước : 140*20 cm</li>
              </ul>
            </div>
          </div> */}
          <div className="relative h-[460px] md:h-[1000px] w-full">
            <Image priority src="/thuoctrihoinach/2.jpg" fill alt="maymassagecovaigay" className="md:object-contain object-cover"></Image>
          </div>

          <div className="relative h-[500px] md:h-[1000px] w-full">
            <Image priority src="/thuoctrihoinach/3.jpg" fill alt="maymassagecovaigay" className="md:object-contain object-cover"></Image>
          </div>

          {/* <div className="relative  h-[720px] md:h-[1000px] w-full">
            <Image priority src="/noicomdien/4.jpg" fill alt="maymassagecovaigay" className="md:object-contain object-cover"></Image>
          </div>
          <div className="relative  h-[500px] md:h-[1000px] w-full">
            <Image src="/noicomdien/5.jpg" fill alt="maymassagecovaigay" className="md:object-contain object-cover"></Image>
          </div>
          <div className="relative h-[460px] md:h-[1000px] w-full">
            <Image src="/noicomdien/6.jpg" fill alt="maymassagecovaigay" className="md:object-contain object-cover"></Image>
          </div> */}
        </div>
      </DynamicSectionWrapper>

      <DynamicSectionWrapper className="" id="danhgia" titleSection="đánh giá sản phẩm">
        <div className="comments">
          <div className="flex gap-4 items-start ">
            <div className="px-2 flex flex-col items-center">
              <div className="font-semibold text-[35px]">4.9</div>

              <div className="flex gap-2">
                {Array.from({ length: 5 }, (value, i) => (
                  <RenderIconStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <div className="font-light mt-[10px]">4824 đánh giá</div>
            </div>
            <div className="grow px-2 right-side flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <div className="left-side gap-1 flex items-center">
                  {Array.from({ length: 5 }, (value, i) => (
                    <RenderIconStar className="text-yellow-400" key={i} />
                  ))}
                </div>
                <div className="center-side bg-[#FAF8F6] border border-[grey] rounded-2xl w-full relative">
                  <div className="h-[20px] w-full relative bg-yellow-400 rounded-2xl "></div>
                </div>
                <div className="right-side font-light"> 3678</div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="left-side gap-1 flex items-center">
                  {Array.from({ length: 4 }, (value, i) => (
                    <RenderIconStar className="text-yellow-400" key={i} />
                  ))}
                  <RenderIconStar className="text-[grey]" />
                </div>

                <div className="center-side bg-[#FAF8F6] border border-[grey] rounded-2xl w-full relative">
                  <div className="h-[20px] w-4/12 relative bg-yellow-400 rounded-2xl "></div>
                </div>
                <div className="right-side font-light"> 97</div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="left-side gap-1 flex items-center">
                  {Array.from({ length: 3 }, (value, i) => (
                    <RenderIconStar className="text-yellow-400" key={i} />
                  ))}
                  <RenderIconStar className="text-[grey]" />
                  <RenderIconStar className="text-[grey]" />
                </div>

                <div className="center-side bg-[#FAF8F6] border border-[grey] rounded-2xl w-full relative">
                  <div className="h-[20px] w-2/12 relative bg-yellow-400 rounded-2xl "></div>
                </div>
                <div className="right-side font-light"> 16</div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="left-side gap-1 flex items-center">
                  {Array.from({ length: 5 }, (value, i) => (
                    <RenderIconStar className="text-[gray]" key={i} />
                  ))}
                </div>

                <div className="center-side bg-[#FAF8F6] border border-[grey] rounded-2xl w-full relative">
                  <div className="h-[20px] w-0 relative bg-yellow-400 rounded-2xl "></div>
                </div>
                <div className="right-side font-light"> 0</div>
              </div>
            </div>
          </div>
          <div className="border-b border-[grey] py-[20px] italic text-center">Người dùng nói gì về sản phẩm . </div>

          <div className="mt-[20px]">
            <h1 className=" uppercase font-bold italic">tất cả bình luận </h1>
            <h2 className="text-[14px] font-semibold">1085 bình luận</h2>
          </div>
          <RenderComment
            timeComments="1 ngày trước"
            userName="Thúy diễm"
            numberLikes="121"
            comment="Sản phẩm rất tốt đã mua 2 lần sẽ ủng hộ tiếp ạ ^^!"
            userAvatarUrl="https://api.dicebear.com/9.x/shapes/svg?seed=Mason"
          ></RenderComment>
          <RenderComment
            timeComments="1 ngày trước"
            userName="Minh Tuấn"
            numberLikes="4"
            comment="Tính ra e bị hôi nhẹ rất khó chịu sau khi dùng 1 lọ thấy đỡ hẵn."
            userAvatarUrl="https://api.dicebear.com/9.x/personas/svg?seed=Mason"
          ></RenderComment>
          <RenderComment
            timeComments="1 ngày trước"
            userName="Đoàn Trung Hiếu"
            numberLikes="1"
            comment="Mới mua về để dùng thử xem sao nhưng shop tư vấn nhiệt tình  "
            userAvatarUrl="https://api.dicebear.com/9.x/pixel-art-neutral/svg?seed=Mason"
          ></RenderComment>
          <RenderComment
            timeComments="1 ngày trước"
            userName="Cường Nguyễn"
            numberLikes="9"
            comment="Tư vấn nhiệt tình còn sản phẩm thì phù hợp với giá thành để dùng thử 1 thời gian mới biết chất lượng ra sao"
            userAvatarUrl="https://api.dicebear.com/9.x/fun-emoji/svg?seed=Ryker"
          ></RenderComment>
          <RenderComment
            timeComments="1 ngày trước"
            userName="Phan Anh"
            numberLikes="13"
            comment="Đã dùng sản phẩm này trong một thời gian và thật sự không hối hận. Xuất sắc"
            userAvatarUrl="https://api.dicebear.com/9.x/thumbs/svg?seed=Andrea"
          ></RenderComment>
          <RenderComment
            timeComments="1 ngày trước"
            userName="ST1"
            numberLikes="36"
            comment="Cũng được"
            userAvatarUrl="https://api.dicebear.com/9.x/big-smile/svg?seed=Easton"
          ></RenderComment>
          <RenderComment
            timeComments="1 ngày trước"
            userName="Khánh Vân"
            numberLikes="9"
            comment="Loại này uống vô có cảm giác dễ chịu cực "
            userAvatarUrl="https://api.dicebear.com/9.x/fun-emoji/svg?seed=Ryker"
          ></RenderComment>
          <RenderComment
            timeComments="1 ngày trước"
            userName="Văn Thắm"
            numberLikes="3"
            comment="Chất lượng tốt và giá cả hợp lý. Mình rất thích"
            userAvatarUrl="https://api.dicebear.com/9.x/initials/svg?seed=Kimberly"
          ></RenderComment>
          <RenderComment
            timeComments="1 ngày trước"
            userName="Bảo Lâm"
            numberLikes="61"
            comment="Sản phẩm làm đúng như mô tả. Cảm ơn"
            userAvatarUrl="https://api.dicebear.com/9.x/shapes/svg?seed=Ryker"
          ></RenderComment>
          <RenderComment
            timeComments="1 ngày trước"
            userName="Mai Hương"
            numberLikes="5"
            comment="Rất ưng ý với sản phẩm này. Giao hàng cũng nhanh"
            userAvatarUrl="https://api.dicebear.com/9.x/rings/svg?seed=Mason"
          ></RenderComment>
          <RenderComment
            timeComments="1 ngày trước"
            userName="Minh Dương"
            numberLikes="13"
            comment="Mình cảm thấy sản phẩm này đáng để thử. Không thất vọng"
            userAvatarUrl="https://api.dicebear.com/9.x/lorelei/svg?seed=Riley"
          ></RenderComment>
        </div>
      </DynamicSectionWrapper>
    </div>
  );
};

export default DatHangGiaDung;
