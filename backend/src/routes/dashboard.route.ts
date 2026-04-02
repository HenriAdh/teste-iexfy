import { Router } from "express";
import { resumeDashboard } from "../controllers/dashboardController";

const dashboardRouter = Router();

dashboardRouter.get("/resumo", resumeDashboard);

export { dashboardRouter };
