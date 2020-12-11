// Sum of values in array
// array.forEach takes a function of 1 argument which can
// take 3 arguments in this particular order namely 'value','index','array'

const nums = [1,2,3,4,5];

total = 0;
nums.forEach((v) => {
    total += v;
})

console.log(total)

arr.forEach((value, index, array) => {
    console.log('index', index, 'has a value of', value,
    'which correlates to array[' + index + ']:', array[index]);
});


const fn = (value, index, array) => {
    console.log('index', index, 'has a value of', value,
    'which correlates to array[' + index + ']:', array[index]);
}

arr.forEach(fn);