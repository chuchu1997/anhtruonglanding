import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@radix-ui/react-scroll-area";
const ThongSoKyThuat = () => {
  return (
    // <Table className="mt-[10px]">

    //   <TableBody className="">
    //     <TableRow className="text-black/80">
    //       <TableCell className="min-w-[100px] ">Thiết Kế</TableCell>
    //       <TableCell className="text-right">
    //         <ul>
    //           <li>Với thiết kế 100% nhôm đúc đặc chắc chắn , với tấm nhôm sáng.</li>
    //           <li>Đặc biệt: Hai thanh thép mạ crom đặc cắt gạch chuẩn hơn không cần dùng đến đèn lazer.</li>
    //         </ul>
    //       </TableCell>
    //       {/* <TableCell>Sử dụng đệm cao su nguyên chất</TableCell>
    //       <TableCell className="text-right">Sử dụng công nghệ japan (Nhật Bản)</TableCell> */}
    //     </TableRow>
    //     {/* <TableRow className="text-black/80">
    //       <TableCell>Đặc biệt: Hai thanh thép mạ crom đặc cắt gạch chuẩn hơn không cần dùng đến đèn lazer</TableCell>
    //       <TableCell>Sự kết hợp hoàn hảo của thép và kim cương sẽ tạo thành 1 khối chắc chắn và bén hơn tạo đường cắt đẹp hạn chế bụi</TableCell>
    //       <TableCell>Sử dụng đệm cao su nguyên chất</TableCell>
    //       <TableCell className="text-right">Sử dụng công nghệ japan (Nhật Bản)</TableCell>
    //     </TableRow> */}
    //   </TableBody>
    // </Table>
    <div className="mt-[10px] text-sm py-20">
      <div className="row p-4 flex items-start justify-between gap-2 mt-4 border-b transition-colors ">
        <div className="left min-w-[100px]">
          <div className="font-semibold">Thiết Kế</div>
        </div>
        <div className="text-right right">
          <ul>
            <li>Với thiết kế 100% nhôm đúc đặc chắc chắn , với tấm nhôm sáng.</li>
            <li>Đặc biệt: Hai thanh thép mạ crom đặc cắt gạch chuẩn hơn không cần dùng đến đèn lazer.</li>
          </ul>
        </div>
      </div>

      <div className="row p-4 flex items-start justify-between gap-2 mt-4 border-b transition-colors ">
        <div className="left min-w-[100px]">
          <div className="font-semibold">Lưỡi Cắt</div>
        </div>
        <div className="text-right right">
          <ul>
            <li>Sử dụng lưỡi cắt bút kim cương cùng với sự kết hợp hoàn hảo của thép sẽ tạo thành 1 khối chắc chắn.</li>
            <li>Cùng với sự kết hợp đó khiến cho lưỡi bén hơn tạo đường cắt đẹp ,mượt và hạn chế bụi.</li>
          </ul>
        </div>
      </div>

      <div className="row p-4 flex items-start justify-between gap-2 mt-4 border-b transition-colors ">
        <div className="left min-w-[100px]">
          <div className="font-semibold">Đệm Cao Su</div>
        </div>
        <div className="text-right right">
          <ul>
            <li>Với thiết kế sang trọng hơn khi có đệm cao su 100%.</li>
            <li>Bàn cắt gạch panapro sẽ giúp giữ gạch chặt hơn trong suốt quá trình cắt.</li>
          </ul>
        </div>
      </div>

      <div className="row p-4 flex items-start justify-between gap-2 mt-4 border-b transition-colors ">
        <div className="left min-w-[100px]">
          <div className="font-semibold">Công Nghệ</div>
        </div>
        <div className="text-right right">
          <ul>
            <li>Bàn cắt gạch sử dụng công nghệ của nhật bản tiên tiến và hiện đại.</li>
            <li>Có độ bền tốt chất lượng cao và mang lại yên tâm cho người sử dụng.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThongSoKyThuat;
