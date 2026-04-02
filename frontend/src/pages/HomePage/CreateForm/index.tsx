import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useState } from "react";

interface CreateLeadFormProps {
  handleCreateLead: (nome: string, valor: string) => void;
}
export function CreateLeadForm({ handleCreateLead }: CreateLeadFormProps) {
  const [name, setName] = useState<string>("");
  const [value, setValue] = useState<string>("0");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const toogleModal = () => {
    setOpenModal((v) => !v);
  };

  function sendDataAndClose() {
    handleCreateLead(name, value);
    toogleModal();
  }

  return (
    <Dialog open={openModal}>
      <DialogTrigger asChild>
        <Button onClick={toogleModal}>
          <Plus /> Novo
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastrar nova oportunidade</DialogTitle>
        </DialogHeader>

        <Label htmlFor="name-1">Nome</Label>
        <Input
          id="name-1"
          name="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Label htmlFor="valor-1">Valor</Label>
        <Input
          id="valor-1"
          name="valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="number"
        />

        <Button onClick={sendDataAndClose}>Enviar</Button>
      </DialogContent>
    </Dialog>
  );
}
