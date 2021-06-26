// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log("draw")
//     }
// }

// // now we have two instance from this constructor function
// const c1 = new Circle(1)
// const c2 = new Circle(1)

// console the both
// both have the radius property and draw method.
// as we know the draw method is  same in both case. if these instances are 100, we have to repeat the draw method to 100 time. which is dangerous for memory.
// to solve this inheritance is come in the picture.

// according to prototypical inheritance when we access a property of an object, the javascript engine find it in the object, and if it is not present js engine go towards its prototype.

// now we'll take this draw method in prototype of constructor.

// Circle.prototype === c1.__proto__ ("but this is deprecated")


function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.draw = function () {
    console.log("draw this")
}

// now we dont need to keep the draw method in the constructor
// now we have two instance from this constructor function
const c1 = new Circle(1)
const c2 = new Circle(1)

// now because of the prototypical inheritance we can still access it. 
// so essentialy we have two types of properties and methods in javascript.

//1- instance properties/method(members)
//2- prototype properties/method(members)


// we can overwrite the .toString() method
Circle.prototype.toString = function () {
    return "Circle with the radius " + this.radius
}

// here actually we add a new method in object base or in prototype of Circle constructor. 

// in root Object the toString() method is available. 
// when we can c1.toString() the new method that we have added will be returned and used. because this is more accessible.

// we can also access the instance member in prototypical member and vise versa