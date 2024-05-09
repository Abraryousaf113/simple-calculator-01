import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber"},
  {
    message: "select one of the opetators to perform action",
    type: "list",
    name: "operators",
    choices: ["addition", "substraction", "multilication", "division"],
  },
]);

//conditional statement
if (answer.operators==="addition"){
  console.log(answer.firstNumber + answer.secondNumber)
} else if (answer.operator==="substraction"){
    console.log(answer.firstNumber - answer.secondNumber)
}else  if (answer.operator==="multilication"){
    console.log(answer.firstNumber * answer.secondNumber)
 }else if (answer.operator==="division"){
    console.log(answer.firstNumber / answer.secondNumber)
}

