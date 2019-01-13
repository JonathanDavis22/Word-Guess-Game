/* Write a function that takes two arguments:
* An array
* A function

And returns a new array with the result of calling the function for each element
in the input array.

EXAMPLES:
IN:  ([0, 2, 9], function(x) {return x + 5;})
OUT: [5, 7, 14]

IN:  (["a", "word"], function(x) {return x + "!";})
OUT: ["a!", "word!"] */

function map(array, fn) {
    // Create new array
    var result = [];

    for (var i = 0; i < array.length; i++) {
        result[i] = fn(array[i]);
    }
    // Run fn on each element of array
    // Store results in a new array

    // Return new array
    return result;
}