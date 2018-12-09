// let input = process.argv;

// console.log(input.splice(2, input.length).sort());



let input = process.argv;

let numbers = [];

for (let i = 2; i < input.length; i++) {
    numbers.push(parseFloat(input[i]))
}

console.log(numbers);

console.log(numbers.sort());

function sortOrder(a, b) {
    return a-b;
}