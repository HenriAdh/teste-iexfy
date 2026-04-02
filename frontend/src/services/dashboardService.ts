import type { AxiosInstance } from "axios";
import { config } from ".";
import axios from "axios";

class DashboardService {
  #api: AxiosInstance = axios.create({
    ...config,
    baseURL: config.baseURL + "/dashboard",
  });

  async listDashboardResume() {
    const response = await this.#api.get("/resumo");

    return response.data;
  }
}

const dashboardService = new DashboardService();

export { dashboardService };
