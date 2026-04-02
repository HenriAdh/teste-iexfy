import { z } from "zod";
import { LeadStatus } from "../models/lead";

export const createLeadRequest = z.object({
  nome: z.string(),
  valor: z.number(),
});

export const listLeadQuery = z.object({
  status: z.union([z.enum(LeadStatus), z.string()]),
});

export const getLeadParams = z.object({
  id: z.string(),
});

export const updateLeadParams = z.object({
  id: z.string(),
});

export const updateLeadRequest = z.object({
  status: z.enum(LeadStatus),
});

export const deleteLeadParams = z.object({
  id: z.string(),
});
