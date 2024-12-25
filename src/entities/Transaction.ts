export default interface Transaction {
  id: string;
  source_account_id: string;
  destination_account_id: string;
  amount: number;
}
