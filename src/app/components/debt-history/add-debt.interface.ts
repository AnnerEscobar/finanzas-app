export interface hystoryDto {
  _id?: string;
  debtName: string;
  amount: number;
  interestRate: number;
  endDate: Date;
  minimumPayment: number;
  percentage?: number;
  payAmount?: number;
  interestPay?: number;
  payDate?: Date;
  date: Date;
  to: string;

}
