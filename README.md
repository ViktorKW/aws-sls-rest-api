![alt text](error.png)

stacktrace
src/addTodo.js
9
console.log(JSON.parse(event.body));
^ SyntaxError Unexpected token e in JSON at position 0
serverless_sdk/index.js
24
let n;e.exports="function"==typeof queueMicrotask?queueMicrotask.bind("undefined"!=typeof window?win
/var/runtime/Runtime.js
73
let result = this.handler(
log
02:14:58 pm
START RequestId: c71b9f01-b56b-48dc-972f-45e7324802ca Version: $LATEST
02:14:58 pm
2022-09-21T11:14:58.512Z c71b9f01-b56b-48dc-972f-45e7324802ca INFO eyJ0b2RvIjoiZG9kbyJ9
02:14:58 pm
2022-09-21T11:14:58.513Z c71b9f01-b56b-48dc-972f-45e7324802ca INFO
02:14:58 pm
2022-09-21T11:14:58.515Z c71b9f01-b56b-48dc-972f-45e7324802ca ERROR SyntaxError: Unexpected token e in JSON at position 0 at JSON.parse (<anonymous>) at addTodo (/var/task/src/addTodo.js:9:20) at Runtime.handler (/var/task/serverless_sdk/index.js:24:10716) at Runtime.handleOnceNonStreaming (/var/runtime/Runtime.js:73:25)
02:14:58 pm
2022-09-21T11:14:58.553Z c71b9f01-b56b-48dc-972f-45e7324802ca ERROR Invoke Error { "errorType": "SyntaxError", "errorMessage": "Unexpected token e in JSON at position 0", "stack": [ "SyntaxError: Unexpected token e in JSON at position 0", " at JSON.parse (<anonymous>)", " at addTodo (/var/task/src/addTodo.js:9:20)", " at Runtime.handler (/var/task/serverless_sdk/index.js:24:10716)", " at Runtime.handleOnceNonStreaming (/var/runtime/Runtime.js:73:25)" ] }
02:14:58 pm
END RequestId: c71b9f01-b56b-48dc-972f-45e7324802ca
02:14:58 pm
REPORT RequestId: c71b9f01-b56b-48dc-972f-45e7324802ca Duration: 69.07 ms Billed Duration: 70 ms Memory Size: 1024 MB Max Memory Used: 103 MB Init Duration: 1788.90 ms
