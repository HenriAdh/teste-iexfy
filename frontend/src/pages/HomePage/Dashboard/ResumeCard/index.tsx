import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface ResumeCard {
  icon: LucideIcon;
  title: string;
  quantity?: number;
  value?: number;
  color?: string;
}

export function ResumeCard({
  icon: Icon,
  title,
  quantity,
  value,
  color,
}: ResumeCard) {
  return (
    <Card className="w-full">
      <CardContent className="flex gap-2">
        <div>
          <Icon color={color || "black"} />
        </div>

        <div className="flex flex-col items-center grow">
          <h1 className="flex gap-2">{title}:</h1>

          <h1 className="text-xl">{quantity || 0}</h1>

          <p>
            {Intl.NumberFormat("pt-BR", {
              currency: "brl",
              style: "currency",
            }).format(value || 0)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
