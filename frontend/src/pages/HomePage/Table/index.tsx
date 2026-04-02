import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const status = ["Aberta", "Ganha", "Perdida"];

interface LeadsTableProps {
  items?: {
    id: string;
    nome: string;
    valor: number;
    status: string;
    data: number;
    atualizado_em: number;
  }[];
  onChangeStatus: (id: string, status: string) => void;
}
export function LeadsTable({ items, onChangeStatus }: LeadsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead className="text-right">Valor</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Criado em</TableHead>
          <TableHead>Atualizado em</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {(items || []).map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.nome}</TableCell>
            <TableCell className="text-right">
              {Intl.NumberFormat("pt-BR", {
                currency: "brl",
                style: "currency",
              }).format(item.valor || 0)}
            </TableCell>
            <TableCell>
              <Combobox
                items={status}
                onValueChange={(v) => onChangeStatus(item.id, v as string)}
              >
                <ComboboxInput value={item.status} className="w-max" />

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
            </TableCell>
            <TableCell>
              {new Date(item.data).toLocaleDateString("pt-BR")}
            </TableCell>
            <TableCell>
              {new Date(item.atualizado_em).toLocaleDateString("pt-BR")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
