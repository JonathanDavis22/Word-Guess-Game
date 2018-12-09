let one = parseFloat(process.argv[2]);
let two = parseFloat(process.argv[3]);

console.log(
    one === two,
    one % 7 === 0 && two % 7 === 0
);



//EXTRA SOLUTIONS BELOW

// if (one === two) {
//     console.log(true)
// } else {
//     console.log(false);
// };

// console.log((process.argv[2]) === (process.argv[3]));