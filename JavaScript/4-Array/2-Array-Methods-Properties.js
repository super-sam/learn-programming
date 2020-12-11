let arr = [1, 2, 3, 4, 5];

// Property: length
// It stores the number of items in array
console.log(arr.length)     // 5

// Method : push
// append an item of array
let new_length_array = arr.push(99)
console.log(arr)            // [1, 2, 3, 4, 5, 99]

// Method : pop
// delete the last item of array
let deleted = arr.pop()
console.log(deleted)
console.log(arr)

let message =  name => `Hello from ${name}!`
// to add function in an array
arr.push(message)
console.log(arr)            // [1, 2, 3, 4, 5, f] where 'f' is the message function


var Obj = {
    message: name => `Hello from ${name}!`
}

let my_message = Obj.message("Sapna")
let deleted = arr.pop()