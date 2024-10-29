import axios from "@/axios/interceptors";
let url = "/product";
const ProductAPI = {
  getAllProducts: async () => {
    return await axios({
      method: "GET",
      url: url,
    });
  },
};

export { ProductAPI };
