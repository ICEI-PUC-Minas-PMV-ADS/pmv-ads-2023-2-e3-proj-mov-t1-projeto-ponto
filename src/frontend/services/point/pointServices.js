import api from "../api";

export class PointServices {
  static async registerPoint(point) {
    try {
      const { data } = await api.post("/points", point);
      return data;
    } catch (error) {
      throw new Error("Erro ao cadastrar empresa");
    }
  }
}
