import axiosInstance from "@/axios";
import { BannerItemInterface, Section01Interface } from "@/interfaces";
const url = "/layout/trang-chu";
export const TrangChu_API = {
  getBanners: async () => {
    return axiosInstance({
      method: "GET",
      url: `${url}/banners`,
    });
  },

  createBanner: async ({ title, description, file }: { title: string; description: string; file: File }) => {
    let formData = new FormData();
    formData.append("title", title), formData.append("description", description), formData.append("image", file);
    // formData.append('title')
    return axiosInstance({
      method: "POST",
      url: `${url}/banners`,
      data: formData,
    });
  },
  updateBanner: async (objectUpdate: BannerItemInterface, file?: File | null) => {
    let formData = new FormData();
    formData.append("title", objectUpdate.title);
    formData.append("_id", objectUpdate._id ?? "");
    formData.append("description", objectUpdate.description);
    formData.append("imagePath", objectUpdate.imagePath);
    if (file) {
      formData.append("image", file);
    }
    return axiosInstance({
      method: "PATCH",
      url: `${url}/banners/${objectUpdate._id}`,
      data: formData,
    });
  },
  deleteBanner: async (id: string) => {
    return axiosInstance({
      method: "DELETE",
      url: `${url}/banners/${id}`,
    });
  },

  getSection01: async () => {
    return axiosInstance({
      method: "GET",
      url: `${url}/section01`,
    });
  },
  updateSection01: async (data: Section01Interface, imageFile?: File | null) => {
    console.log("DATA", data);
    console.log("image", imageFile);
  },
};
