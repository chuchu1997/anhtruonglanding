import axiosInstance from "..";

const url = "/layout/logo";
export const Logo_API = {
  getLogo: async () => {
    return axiosInstance({
      method: "GET",
      url: url,
    });
  },
  changeLogo: async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);
    return axiosInstance({
      data: formData,
      method: "POST",
      url: url,
    });
  },
};
