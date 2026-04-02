// crud de lead.

import { NextFunction, Request, Response } from "express";
import { Lead, leads, LeadStatus } from "../models/lead";
import {
  createLeadRequest,
  deleteLeadParams,
  getLeadParams,
  listLeadQuery,
  updateLeadParams,
  updateLeadRequest,
} from "../schemas/lead";

export const createLead = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { nome, valor } = createLeadRequest.parse(request.body);

    let lead: Lead | undefined;
    let id: string;

    do {
      id = crypto.randomUUID();

      lead = leads.get(id);
    } while (lead);

    lead = {
      id,
      nome,
      valor,
      status: LeadStatus.ABERTA,
      data: Date.now(),
      atualizado_em: Date.now(),
    };

    leads.set(id, lead);

    response.status(201).json(lead);
  } catch (error) {
    next(error);
  }
};

export const listLead = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { status } = listLeadQuery.parse(request.query);

    const listedLeads = [...leads.values()];

    if (status) {
      const filtered = listedLeads.filter((lead) => lead.status === status);

      return response.status(200).json(filtered);
    }

    response.status(200).json(listedLeads);
  } catch (error) {
    next(error);
  }
};

export const getLead = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = getLeadParams.parse(request.params);

    const lead = leads.get(id);

    if (!lead) {
      return response
        .status(404)
        .json({ message: "Oportunidade não encontrada" });
    }

    response.status(200).json(lead);
  } catch (error) {
    next(error);
  }
};

export const updateLead = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = updateLeadParams.parse(request.params);
    const { status } = updateLeadRequest.parse(request.body);

    const lead = leads.get(id);

    if (!lead) {
      return response
        .status(404)
        .json({ message: `Oportunidade não encontrada` });
    }

    lead.status = status;

    leads.set(id, lead);

    response.status(200).json(lead);
  } catch (error) {
    next(error);
  }
};

export const deleteLead = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = deleteLeadParams.parse(request.params);

    const lead = leads.get(id);

    if (!lead) {
      return response
        .status(404)
        .json({ message: "Oportunidade não encontrada" });
    }

    leads.delete(id);

    response.status(200).json(lead);
  } catch (error) {
    next(error);
  }
};
