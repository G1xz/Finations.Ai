"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { addTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface addTransactionParams {
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  PaymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const addTransaction = async (params: addTransactionParams) => {
  addTransactionSchema.parse(params);
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  await db.transaction.create({
    data: {
      userId,
      name: params.name,
      amount: params.amount,
      type: params.type,
      category: params.category,
      paymentMethod: params.PaymentMethod, // <-- corrigido aqui
      date: params.date,
    },
  });
  revalidatePath("/transactions");
};
