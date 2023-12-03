import api from "../api";
import md5 from "md5";

export class authServices {
  static async login(loginInfo) {
    const { email } = loginInfo;

    try {
      const { data } = await api.get(`/users?email=${email}`);
      const userInfo = data[0];
      
      if (userInfo.password !== loginInfo.password){
        throw new Error ("Usuário ou senha incorretos")
      }

      delete userInfo.password;
      delete userInfo.passwordConfirmation;

      return userInfo;
    } catch (error) {
      throw new Error("Usuário ou senha incorretos");
    }
  }

  static generateDummyToken(userInfo) {
    const dummyToken = md5(userInfo);
    return dummyToken;
  }
}
