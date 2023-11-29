import api from "../api";

export class userServices {
  static async registerUser(userInfo) {
    try {
      const { data } = await api.post("/users", userInfo);

      delete data.password;
      delete data.passwordConfirmation;

      return data;
    } catch (error) {
      throw new Error("Erro ao cadastrar usuário");
    }
  }
  static async updateUser(userInfo) {
    try {
      const response = await api.put(`/users/${userInfo.id}`, userInfo);
      return response;
    } catch (error) {
      throw new Error("Erro ao cadastrar usuário");
    }
  }
}
