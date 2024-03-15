const express = require("express");
const AWS = require("aws-sdk");

const App = express();

App.use(express.json());

AWS.config.update({
  region: "sa-east-1",
});

const sqs = new AWS.SQS({ apiVersion: "2012-11-05" });

App.post("/transaction", async (req, res) => {
  try {
    const { idempotencyId, amount, type } = req.body;

    const parameters = {
      QueueUrl:
        "https://sqs.sa-east-1.amazonaws.com/851725269308/transactions-sqs",
      MessageBody: JSON.stringify({ idempotencyId, amount, type }),
    };

    await sqs.sendMessage(parameters).promise();

    res
      .status(201)
      .json({ message: "Transaction sent to SQS queue successfully." });
  } catch (error) {
    console.error("Error in sending transaction to SQS queue: ", error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

App.listen(3001, () => {
  console.log("Server running in port 3001");
});
