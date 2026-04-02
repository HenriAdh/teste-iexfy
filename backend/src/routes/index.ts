import { Router } from "express";
import { leadsRouter } from "./leads.route";
import { dashboardRouter } from "./dashboard.route";

const appRouter = Router();

appRouter.use("/oportunidades", leadsRouter);
appRouter.use("/dashboard", dashboardRouter);

export { appRouter };
