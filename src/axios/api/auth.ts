import axios from "@/axios/interceptors";
interface propsLogin {
  username: string;
  password: string;
}
const AuthAPI = {
  login: async ({ username, password }: propsLogin) => {
    console.log("US", username);
    console.log("PW", password);
    return await axios({
      method: "POST",
      url: "/auth/login",
      data: { username, password },
    });
  },
};
export { AuthAPI };
