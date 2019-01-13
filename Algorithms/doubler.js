let input = [1, 2, 3];

function double(nums) {
    return nums.map(num => 2*num);
}

function doubleIter(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * 2;
    }
    return nums;
}

console.log(double(input));
console.log(doubleIter(input));