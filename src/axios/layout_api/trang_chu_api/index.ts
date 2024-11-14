import axiosInstance from "@/axios";
import { CreateBannerInterface } from "@/interfaces";
const url = "/layout/trang-chu";
export const TrangChu_API = {
  getBanners: async () => {
    return axiosInstance({
      method: "GET",
      url: `${url}/banners`,
    });
  },

  createBanner: async ({ imageListDescription }: { imageListDescription: CreateBannerInterface[] }) => {
    return axiosInstance({
      method: "POST",
      url: `${url}/banners`,
      data: imageListDescription,
    });
  },
};
