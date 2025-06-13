export interface DebtDetailed {
  _id: string;
  debtName: string;
  amount: number;        // saldo actual
  totalPaid: number;
  initialAmount: number;
  percentage: number;
}
