"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CircleIcon } from "lucide-react";

export const TransactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "Type",
    header: "Tipo",
    cell: ({ row: { original: Transaction } }) => {
      if (Transaction.type == TransactionType.DEPOSIT) {
        return (
          <Badge className="bg-muted text-primary hover:bg-muted font-bold">
            <CircleIcon className="fill-primary mr-2" size={10} />
            Deposito
          </Badge>
        );
      }
      if (Transaction.type == TransactionType.EXPENSE) {
        return (
          <Badge className="font-bold bg-muted  text-danger hover:bg-muted">
            <CircleIcon className="fill-danger mr-2" size={10} />
            Gasto
          </Badge>
        );
      }
      return (
        <Badge className="font-bold bg-muted  text-white hover:bg-muted">
          <CircleIcon className="fill-white mr-2" size={10} />
          Investimento
        </Badge>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "paymentMethod",
    header: "Metodo de pagamento",
  },
  {
    accessorKey: "date",
    header: "data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
  {
    accessorKey: "actions",
    header: "",
  },
];
