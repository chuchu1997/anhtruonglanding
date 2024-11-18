import { Button } from "@/components/ui/button";
import React from "react";
import { Trash } from "react-feather";
import {
  AlertDialogHeader,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { TrangChu_API } from "@/axios/layout_api/trang_chu_api";
import { toast } from "@/hooks/use-toast";
interface propsType {
  _id: string;
  onDeleteBanner: Function;
}
const DeleteBannerAction = (props: propsType) => {
  const { _id, onDeleteBanner } = props;

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>
            <Trash />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Bạn chắc chắn muốn xóa banner này ?</AlertDialogTitle>
            <AlertDialogDescription>
              {/* This action cannot be undone. This will permanently delete your account and remove your data from our servers. */}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                let res = await TrangChu_API.deleteBanner(_id);
                if (res) {
                  toast({
                    title: "Xóa banner thành công",
                  });
                  onDeleteBanner();
                }
              }}
            >
              Xóa
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteBannerAction;
