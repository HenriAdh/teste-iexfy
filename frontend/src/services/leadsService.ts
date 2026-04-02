import type { AxiosInstance } from "axios";
import { config } from ".";
import axios from "axios";

class LeadsService {
  #api: AxiosInstance = axios.create({
    ...config,
    baseURL: config.baseURL + "/oportunidades",
  });

  async createLead(nome: string, valor: number) {
    const response = await this.#api.post("/", { nome, valor });

    return response.data;
  }

  async listLeads(status?: string) {
    const response = await this.#api.get("/" + `?status=${status || ""}`);

    return response.data;
  }

  async getLead(id: string) {
    const response = await this.#api.get(`/${id}`);

    return response.data;
  }

  async updateLead(id: string, status: string) {
    const response = await this.#api.patch(`/${id}`, { status });

    return response.data;
  }

  async deleteLead(id: string) {
    const response = await this.#api.delete(`/${id}`);

    return response.data;
  }
}

const leadsService = new LeadsService();

export { leadsService };
