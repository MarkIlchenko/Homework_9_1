// Homework 1
let sumPositive = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; ++i) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    return sum;
};

let result = sumPositive([16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]);

console.log(result);