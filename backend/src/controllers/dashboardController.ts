import { NextFunction, Request, Response } from "express";
import { leads, LeadStatus } from "../models/lead";

export const resumeDashboard = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const listedLeads = [...leads.values()];

  const results = {
    [LeadStatus.ABERTA]: {
      quantidade: 0,
      valor: 0,
    },
    [LeadStatus.GANHA]: {
      quantidade: 0,
      valor: 0,
    },
    [LeadStatus.PERDIDA]: {
      quantidade: 0,
      valor: 0,
    },
    Total: {
      valor: 0,
      quantidade: 0,
    },
  };

  for (const lead of listedLeads) {
    results[lead.status].quantidade += 1;
    results[lead.status].valor += lead.valor;
    results.Total.valor += lead.valor;
    results.Total.quantidade += 1;
  }

  response.status(200).json(results);
};
