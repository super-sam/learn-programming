// Function Statement
// Write a function which takes an argument name and prints a message "Hello from $(name)" using String Interpolation
function message (name){
    return `Hello from ${name}!`;
}

// Function Expression
let message = function(name){
    return `Hello from ${name}!`;
}

// Arrow Function
let message = (name) => {
    return `Hello from ${name}!`;
}

// Arrow Function with Single Argument 
// Remove parenthesis ()
let message = name => {
    return `Hellow form ${name}!`;
}

// Arrow Function with Single Statement in execution block
// Remove {} and return word
let message = name => `Hello from ${name}!`;

// How to use function
message("Celestina")

let sqr = num => num**2

let my_square = sqr(5)

