export default interface CreateTransactionDTO {
  source_account_id: string;
  destination_account_id: string;
  amount: number;
}
