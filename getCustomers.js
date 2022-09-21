"use strict";
const AWS = require("aws-sdk");

module.exports.getCustomers = async (event) => {
  const scanParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
  };

  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const result = await dynamoDB.scan(scanParams).promise();

  if (result.Count === 0) {
    return {
      statusCode: 404,
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      total: result.Count,
      items: await result.Items.map((customer) => {
        return {
          id: customer.id,
          name: customer.name,
          email: customer.email,
        };
      }),
      info: `\n\n\n\nScanParams: ${JSON.stringify(
        scanParams
      )}\n\n\n\n\n Event: ${JSON.stringify(event)}\n`,
    }),
  };
};
