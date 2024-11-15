import axiosInstance from "@/axios";
import { BannerItemInterface } from "@/interfaces";
const url = "/layout/trang-chu";
export const TrangChu_API = {
  getBanners: async () => {
    return axiosInstance({
      method: "GET",
      url: `${url}/banners`,
    });
  },

  createBanner: async ({ imageListDescription }: { imageListDescription: BannerItemInterface[] }) => {
    return axiosInstance({
      method: "POST",
      url: `${url}/banners`,
      data: imageListDescription,
    });
  },
  updateBanner: async (imageUpdate: BannerItemInterface) => {
    return axiosInstance({
      method: "PATCH",
      url: `${url}/banners/${imageUpdate._id}`,
      data: imageUpdate,
    });
  },
};
