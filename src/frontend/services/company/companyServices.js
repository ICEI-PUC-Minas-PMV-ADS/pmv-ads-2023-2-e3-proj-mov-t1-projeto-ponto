import api from "../api";

export class companyServices {
  static async registerCompany(companyInfo) {
    try {
      const { data } = await api.post("/company", companyInfo);
      return data;
    } catch (error) {
      throw new Error("Erro ao cadastrar usuário");
    }
  }

  static async updateCompany(companyInfo) {
    try {
      const response = await api.put(`/users/${companyInfo.id}`, companyInfo);
      return response;
    } catch (error) {
      throw new Error("Erro ao cadastrar usuário");
    }
  }
}
