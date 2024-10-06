import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

async function main() {
  await producer.connect();
  await producer.send({
    topic: "payment",
    messages: [
      {
        value: "hi there" + Math.random(),
      },
    ],
  });
}

main();
