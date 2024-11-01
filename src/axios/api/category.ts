import axios from "@/axios/interceptors";

let url = "/category";

interface createProps {
  name: string;
  description?: string;
  parentCategory?: string;
}

const CategoryAPI = {
  createCategory: async ({ name, description, parentCategory }: createProps) => {
    return await axios({
      method: "POST",
      url: url,
      data: { name, description, parentCategory },
    });
  },

  getAllCategory: async () => {
    return await axios({
      method: "GET",
      url: url,
    });
  },
};

export { CategoryAPI };
