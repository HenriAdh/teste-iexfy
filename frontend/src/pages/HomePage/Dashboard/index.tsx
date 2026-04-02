import { ChartNoAxesColumn, Clock, ThumbsDown, ThumbsUp } from "lucide-react";
import { ResumeCard } from "./ResumeCard";

type Item = { quantidade: number; valor: number };
interface DashboardProps {
  data?: {
    Aberta: Item;
    Ganha: Item;
    Perdida: Item;
    Total: Item;
  };
}
export function Dashboard({ data }: DashboardProps) {
  return (
    <div className="flex justify-between gap-4">
      <ResumeCard
        icon={Clock}
        title="Abertas"
        quantity={data?.Aberta?.quantidade}
        value={data?.Aberta?.valor}
        color="orange"
      />
      <ResumeCard
        icon={ThumbsUp}
        title="Ganhas"
        quantity={data?.Ganha?.quantidade}
        value={data?.Ganha?.valor}
        color="MediumSeaGreen"
      />
      <ResumeCard
        icon={ThumbsDown}
        title="Perdidas"
        quantity={data?.Perdida?.quantidade}
        value={data?.Perdida?.valor}
        color="tomato"
      />
      <ResumeCard
        icon={ChartNoAxesColumn}
        title="Total"
        quantity={data?.Total?.quantidade}
        value={data?.Total?.valor}
        color=""
      />
    </div>
  );
}
