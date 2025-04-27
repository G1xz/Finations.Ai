import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { TransactionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";

const TransanctionsPage = async () => {
  //acessar as transacoes do banco de da
  const transactions = await db.transaction.findMany({});
  return (
    <div className="p-6 space-y-6">
      {/*titulo e botao*/}
      <div className="flex w-full items-center justify-between ">
        <h1 className="font-bold text-2xl">Transacoes</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={TransactionColumns} data={transactions} />
    </div>
  );
};

export default TransanctionsPage;
