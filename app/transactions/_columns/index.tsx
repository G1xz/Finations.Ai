"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_Components/type-badge";
import { Trash2Icon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import {
  TRANSACTION_CATEGORY_LABELS,
  TRANSACTION_PAYMENT_METHOD_LABELS,
} from "@/app/_constants/constants";
import EditTransactionButton from "../_Components/edit-transactions-button";

export const TransactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "Type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) => {
      console.log("Categoria:", transaction.category);
      return TRANSACTION_CATEGORY_LABELS[
        transaction.category as keyof typeof TRANSACTION_CATEGORY_LABELS
      ];
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Metodo de pagamento",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod],
  },

  {
    accessorKey: "date",
    header: "data",
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row: { original: transaction } }) => {
      return (
        <div className="space-x-1">
          <EditTransactionButton transaction={transaction} />
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Trash2Icon />
          </Button>
        </div>
      );
    },
  },
];
