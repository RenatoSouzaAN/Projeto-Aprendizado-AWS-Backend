const axios = require("axios");
let idempotencyId = 0;

const generateRandomTransaction = () => {
  idempotencyId++;
  const amount = parseFloat((Math.random() * 1000).toFixed(2));
  const type = Math.random() > 0.5 ? "credit" : "debit";

  return { idempotencyId: idempotencyId.toString(), amount, type };
};

const test = async () => {
  const apiUrl = "http://localhost:3001/transaction";

  for (let i = 0; i < 100; i++) {
    const transaction = generateRandomTransaction();

    try {
      await axios.post(apiUrl, transaction);
      console.log(`Transaction ${i + 1} sent successfully.`);
      console.log(transaction);
    } catch (error) {
      console.error(`Error in sending transaction ${i + 1}:`, error.message);
    }
  }
};

test();
