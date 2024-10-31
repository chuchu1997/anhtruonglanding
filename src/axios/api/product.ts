import axios from "@/axios/interceptors";

let url = "/product";
interface createProps {
  title: string;
  description: string;
  price: string;
  amount: string;
  images: FileList;
  hashtag?: string;
  dropshipFrom?: string;
  masanpham?: string;
}
const ProductAPI = {
  getAllProducts: async () => {
    return await axios({
      method: "GET",
      url: url,
    });
  },

  createNewProduct: async ({ masanpham, title, description, price, amount, images, hashtag, dropshipFrom }: createProps) => {
    // console.log("DATA", data.images.length);
    let formData = new FormData();
    formData.append("id", masanpham ?? "");
    formData.append("title", title);
    formData.append("description", description);
    formData.append("categoryID", "");
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    if (hashtag) {
      let hashTagExcute = hashtag.split(" ");
      for (let i = 0; i < hashTagExcute.length; i++) {
        formData.append("hashtag", hashTagExcute[i]);
      }
    }

    formData.append("price", price);

    formData.append("amount", amount);
    formData.append("dropshipFrom", dropshipFrom ?? "");
    return await axios({
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      url: url,
      data: formData,
    });
  },
};

export { ProductAPI };
