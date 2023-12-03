import api from "../api";

export class companyServices {
  static async registerCompany(companyInfo) {
    try {
      const { data } = await api.post("/company", companyInfo);
      return data;
    } catch (error) {
      throw new Error("Erro ao cadastrar empresa");
    }
  }

  static async updateCompany(companyInfo) {
    try {
      const { data } = await api.put(`/company/${companyInfo.id}`, companyInfo);
      return data;
    } catch (error) {
      throw new Error("Erro ao atualizar empresa");
    }
  }
}
