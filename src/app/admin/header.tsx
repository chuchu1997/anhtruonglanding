import { Label } from "@/components/ui/label";
import { SheetContent, SheetTrigger, Sheet, SheetClose } from "@/components/ui/sheet";
import React from "react";
import { Menu } from "react-feather";
import Link from "next/link";
import LinkComponentCustom from "@/components/LinkCustom";
const HeaderAdmin = () => {
  return (
    <div className=" relative ">
      <div className="fixed right-0 left-[4px] right-[4px] md:left-[270px] border border-[red] top-[10px] p-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="block md:hidden cursor-pointer text-accent"></Menu>
            </SheetTrigger>
            <SheetContent>
              {/* <div className="mt-[14px]">HELLO WORLD</div> */}

              <div>
                <Label>Chỉnh sửa giao diện</Label>
                <ul>
                  <li>
                    <SheetClose asChild>
                      <LinkComponentCustom href="/admin/trang-chu" title="trang chu" />
                    </SheetClose>
                  </li>
                  <li>
                    <SheetClose asChild>
                      <LinkComponentCustom href="/admin/gioi-thieu" title="gioi" />
                    </SheetClose>
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
          <div>SEARCH</div>
        </div>
        <div>ITEM 2</div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
