import { kafka } from "..";
import ProcessTransactionUseCase from "../../useCases/ProcessTransaction/ProcessTransactionUseCase";
import { Topics } from "../topics";

const consumer = kafka.consumer({ groupId: "transaction-group" });

export const transactionCreatedConsumer = async () => {
  console.log("******* consumer.connect");
  await consumer.connect();
  await consumer.subscribe({
    topic: Topics.TRANSACTION_CREATED,
    fromBeginning: true,
  });

  const processTransactionUseCase = new ProcessTransactionUseCase();

  await consumer.run({
    eachMessage: async ({ message }) => {
      const transaction = JSON.parse(message.value?.toString() || "{}");
      await processTransactionUseCase.execute({ transaction });
    },
  });
};
