// Map
// I am a pre-defined function in an array like push , pop
// I will accept a function with 1 argument as an argument
// I will keep calling the function for every item in the array
// I will return a new array with  exactly same number of item

// Create square of an array
const sqr = n => n ** 2;
const nums = [1, 2, 3, 4, 5]
const sqr_nums = []
for (num of nums){
    sqr_nums.push(sqr(num))
}
console.log(sqr_nums)  // [1,4,9,16,25]

// Do it with Map
const sqr = n => n**2
const nums = [1,2,3,4,5]
const sqr_nums = nums.map(sqr);
console.log(sqr_nums)     // [1,4,9,16,25]

const sqr_nums = nums.map(sqr)
// OR
const sqr_nums = nums.map(num => num ** 2);
// OR
const sqr_nums = nums.map (
    (num) => {
        return num ** 2
    }
);
// OR
const sqr_nums = nums.map (
    function(num){
        return num ** 2
    }
);