// Function Statement

function sum_fn_1(a, b){
    return a + b;
}

// Function Expression
const sum_fn_2 = function(a, b){
    return a + b
}


// Arrow Function
// Replace 'function' with '=>' arrow function
const sum_fn_3 = (a, b) => {
    return a + b;
}

//when there is single statement in function then 
// {} and return is not required
const sum_fn_3_1 = (a, b) => a + b

//when there is Single Argument then
// () is also not required
const num_sq = a => a ** 2
