// 1r222ef ewf 111ss1
import axios from "@/axios/interceptors";

let url = "/search";

const SearchAPI = {
  searchWithText: async (searchText: string) => {
    return await axios({
      method: "GET",
      url: url,
      params: { searchField: searchText },
    });
  },
};

export { SearchAPI };
