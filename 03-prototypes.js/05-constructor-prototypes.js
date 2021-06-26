// we have  learned that every object has a prototype object as a parent object except the root object.
// the proper way to get the prototype of object is 
// Object.getPrototypeOf(myObj)

// we'll get myObj.__proto__
//

function Circle(radius) {
    this.radius = radius
}

const circle = new Circle(1)

// the constructors also have a prototype property. bcz we know in JS the functions are objects. so we also have properties and methods.

// Circle.prototype
// what is this? 
// this is the object that willbe used as the parent of for objects created by the Circle constructor.


// lets create an object
const myObj = {}
// myObj.__proto__
// this is equal to 
//Object.prototype

// in case of constructor
// console the circle
// we'll get two things
// radius and __proto__

// to get this base object(__proto__)
// we can write
// Object.getPrototypeOf(circle)
// we'll get following properties
//          constructos   and __proto__(this __proto__ is root object)

// the other way is use the constructor of the object to get this from prototype property, like

// Circle.prototype
// it will also return
//          constructos   and __proto__(this __proto__ is root object)
