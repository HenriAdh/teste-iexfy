import { useCallback, useEffect, useState } from "react";
import { dashboardService } from "../../services/dashboardService";
import { Dashboard } from "./Dashboard";
import { LeadsTable } from "./Table";
import { leadsService } from "@/services/leadsService";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { CreateLeadForm } from "./CreateForm";

const status = ["Aberta", "Ganha", "Perdida"];

export function HomePage() {
  const [resume, setResume] = useState();

  const fetchResume = useCallback(async () => {
    const data = await dashboardService.listDashboardResume();

    setResume(data);
  }, []);

  useEffect(() => {
    fetchResume();
  }, []);

  const [leads, setLeads] = useState();
  const [statusFilter, setStatusFilter] = useState<string>();

  const fetchLeads = useCallback(
    async (status?: string) => {
      const data = await leadsService.listLeads(status || statusFilter);

      setLeads(data);
    },
    [statusFilter],
  );

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleChangeLeadStatus = async (id: string, status: string) => {
    await leadsService.updateLead(id, status);

    fetchLeads();
    fetchResume();
  };

  const handleCreateLead = async (nome: string, valor: string) => {
    await leadsService.createLead(nome, Number(valor));

    fetchLeads();
    fetchResume();
  };

  const handleStatusFilterChange = (status: string) => {
    setStatusFilter(status);

    fetchLeads(status);
  };

  return (
    <div className="flex justify-center">
      <div className="w-4xl flex flex-col gap-4 pt-4">
        <Dashboard data={resume} />

        <div className="flex gap-2">
          <Combobox
            items={status}
            onValueChange={(value) => handleStatusFilterChange(value as string)}
          >
            <ComboboxInput
              value={statusFilter}
              className="w-full"
              placeholder="Filtre por status"
            />

            <ComboboxContent>
              <ComboboxEmpty>Sem itens encontrados.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>

          <CreateLeadForm handleCreateLead={handleCreateLead} />
        </div>

        <LeadsTable items={leads} onChangeStatus={handleChangeLeadStatus} />
      </div>
    </div>
  );
}
