function add(num1, num2) {
    console.log("Adding two numbers:", num1, "+", num2);
    return num1 + num2;
};

function substract(num1, num2) {
    console.log("Subtracting two numbers:", num1, "-", num2);
    return num1 - num2;
};

function multipy(num1, num2) {
    console.log("Multiplying two numbers:", num1, "*", num2);
    return num1 * num2;
}
function divide(num1, num2) {
    console.log("Dividing two numbers:", num1, "/", num2);
    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
};

module.exports = {
    add,
    substract,
    multipy,
    divide
};