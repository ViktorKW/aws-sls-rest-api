"user strict";

const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.deleteCustome = async (event) => {
  const scanParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
    Key: {
      name: event.pathParameters.name,
    },
  };
  dynamoDB.delete(scanParams, () => {
    return {
      statusCode: 200,
    };
  });
};
