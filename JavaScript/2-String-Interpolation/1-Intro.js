var fname = 'Gellert';
var lname = 'Grindlewald';
var age = '140';
var city = 'Azkaban';

var sentences_without_interpolation = 'My name is '+ fname + ' ' + lname + '. I am ' + age + ' years old. I live in ' + city + '.';

var sentences_multiline_without_interpolation = 'My name is '+ fname + ' ' + lname + '.\n I am ' + age + ' years old.\n I live in ' + city + '.';

console.log(sentences_without_interpolation);
console.log(sentences_multiline_without_interpolation);

// Using interpolation
// It starts and ends with tilde (`)

var sentences_with_interpolation = `My name is ${fname} ${lname}.  I am ${age} years old. I live in ${city}.`

var sentences_multiline_with_interpolation = `My name is ${fname} ${lname}.
I am ${age} years old. 
I live in ${city}.`;

console.log(sentences_with_interpolation);
console.log(sentences_multiline_with_interpolation);



