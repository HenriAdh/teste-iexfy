import { Router } from "express";
import {
  createLead,
  deleteLead,
  getLead,
  listLead,
  updateLead,
} from "../controllers/leadController";

const leadsRouter = Router();

leadsRouter.post("/", createLead);
leadsRouter.get("/", listLead);
leadsRouter.get("/:id", getLead);
leadsRouter.patch("/:id", updateLead);
leadsRouter.delete("/:id", deleteLead);

export { leadsRouter };
