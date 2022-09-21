"use strict";

const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const addTodo = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  console.log(event.body);
  console.log(JSON.parse(event.body));

  const { todo } = JSON.parse(event.body);
  console.log(`this is an todo: ${todo}`);

  const createdAt = new Date();
  const id = v4();

  console.log(`this is an id: ${id}`);

  const newTodo = {
    id,
    todo,
    createdAt,
    completed: false,
  };

  await dynamodb.put({
    TableName: "TodoTable",
    item: newTodo,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(newTodo),
  };
};

module.exports = {
  handler: addTodo,
};
