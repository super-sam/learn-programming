var obj= {
    lname: 'Wan'
}
obj.fname= 'Obi'

var fname = 'Luke'
var lname = 'Skywalker'
var obj2= {
    fname,
    lname
}

// Obj2 definition is equivalent to the below  one
var obj2 = {
    fname: fname,
    lname: lname
}

var obj3 = new Object(); // new Object() is equivalent to {}
obj3.fname = 'Han';
obj3.lname = 'Solo';

var obj4 = Object.create(obj3); // using create method
