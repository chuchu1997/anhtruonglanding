import axiosInstance from "@/axios";
import { CreateBannerInterface } from "@/interfaces";
const url = "/image";
export const IMAGE_API = {
  uploadImages: async ({ imageFiles }: { imageFiles: FileList }) => {
    let formData = new FormData();
    Array.from(imageFiles).map((file, index) => {
      formData.append("images", file);
    });

    return axiosInstance({
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      url: `${url}`,
      data: formData,
    });
  },
};
