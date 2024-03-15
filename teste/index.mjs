import AWS from "aws-sdk";
const dynamoDB = new AWS.DynamoDB.DocumentClient();

console.log(dynamoDB);

export const handler = async (event) => {
  try {
    const records = event.Records;

    for (const record of records) {
      const body = JSON.parse(record.body);

      console.log(body);

      await dynamoDB
        .put({
          TableName: "transactions",
          Item: {
            idempotencyId: body.idempotencyId,
            amount: body.amount,
            type: body.type,
          },
        })
        .promise();
    }

    return { statusCode: 200, body: "Messages processed successfully." };
  } catch (error) {
    console.error("Error in processing messages:", error);
    return { statusCode: 500, body: "Internal Server Error." };
  }
};
