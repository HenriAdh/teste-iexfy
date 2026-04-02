export enum LeadStatus {
  ABERTA = "Aberta",
  GANHA = "Ganha",
  PERDIDA = "Perdida",
}

export interface Lead {
  id: string;
  nome: string;
  valor: number;
  status: LeadStatus;
  data: number;
  atualizado_em: number;
}

export const leads: Map<string, Lead> = new Map();
