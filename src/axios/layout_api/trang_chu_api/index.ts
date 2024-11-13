import axiosInstance from "@/axios";
const url = "/layout/trang-chu";
export const TrangChu_API = {
  getBanners: async () => {
    return axiosInstance({
      method: "GET",
      url: `${url}/banners`,
    });
  },
  updateBanner: async (files: FileList) => {
    let formData = new FormData();
    // formData.append('images',)
    Array.from(files).forEach((file) => formData.append("images", file));
    return axiosInstance({
      method: "GET",
      url: `${url}/banners`,
      data: formData,
    });
  },
};
