export interface DebtDetailed {
  _id: string;
  amount: number;        // saldo actual
  initialAmount: number; // saldo original
  totalPaid: number;     // suma de capital pagado
}

export interface PaymentWithName {
  _id:         string;
  payAmount:   number;
  interestPay: number;
  payDate:     string;
  debtId:      string;
  debtName:    string;
}

export interface ProgressGeneral {
  totalInitial:   number;
  totalPaid:      number;
  totalInterest:  number;
  totalPending:   number;
  paidPercentage: number;
}
