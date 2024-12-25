import { kafka } from "..";
import Transaction from "../../entities/Transaction";
import { Topics } from "../topics";

const producer = kafka.producer();

export const transactionCreatedProducer = async (transaction: Transaction) => {
  console.log("******* producer.connect");
  await producer.connect();
  await producer.send({
    topic: Topics.TRANSACTION_CREATED,
    messages: [{ value: JSON.stringify(transaction) }],
  });
};
