function calculate(firstNumber, secondNumber, operator) {
    let result;
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        default: result = "error";
    }
    console.log(result);
}
let operator = process.argv[4];
let firstNumber = parseInt(process.argv[2]);
let secondNumber = parseInt(process.argv[3]);
calculate(firstNumber, secondNumber, operator);


