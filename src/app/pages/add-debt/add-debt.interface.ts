export interface CreateDebtDto {
  _id?: string;
  debtName: string;
  amount: number;
  interestRate: number;
  endDate: Date;
  minimumPayment: number;
  
}
