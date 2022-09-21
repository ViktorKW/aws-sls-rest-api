"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

module.exports.createCustomer = async (event) => {
  const body = JSON.parse(Buffer.from(event.body, "base64").toString());
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const putParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
    Item: {
      id: v4(),
      name: body.name,
      email: body.email,
    },
  };

  await dynamoDB.put(putParams).promise();
  return {
    statusCode: 201,
  };
};
