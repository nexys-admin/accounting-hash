export interface AccountEntry {
  direction: "debit" | "credit";
  amount: number;
  currency: string;
  account: { number: number };
}

export interface Entry {
  id: number | string;
  description: string;
  date: string;
  accountEntries: AccountEntry[];
}
