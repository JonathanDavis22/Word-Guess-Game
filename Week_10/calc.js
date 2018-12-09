const a = parseFloat(process.argv[3]);
const b = parseFloat(process.argv[4]);
const input = process.argv[2]

if (input === "add") {
    console.log(a + b);
} else if (input === "subtract") {
    console.log(a - b);
} else if (input === "multiply") {
    console.log(a * b);
} else if (input === "divide") {
    console.log(a / b);
} else if (input === "remainder") {
    console.log(a % b);
};