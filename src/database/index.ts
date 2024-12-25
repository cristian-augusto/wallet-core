import Database from "better-sqlite3";

const database = new Database("database.db");

database.exec(
  "CREATE TABLE IF NOT EXISTS costumers (id TEXT PRIMARY KEY, name TEXT, email TEXT)"
);

database.exec(
  "CREATE TABLE IF NOT EXISTS accounts (id TEXT PRIMARY KEY, costumer_id TEXT, balance REAL)"
);

database.exec(
  "CREATE TABLE IF NOT EXISTS transactions (id TEXT PRIMARY KEY, source_account_id TEXT, destination_account_id TEXT, amount REAL)"
);

export default database;
