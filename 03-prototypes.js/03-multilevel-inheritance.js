// in cinsole let create an array
// let myArray = []

// console it
// we'll see two things
// 1- length = 0
// 2- __proto__

// inspects this proto
// this __proto__ have all the array methods that we can implement on an array like push, pull, pop etc

// at the end of these methods we have an other __proto__

// inspect this __proto__

// waao this is the same root object that we have seen in privious example of using objects.

// now what we have inmemory
// myArray === derived from==>  arrayBase ===derived from ==> objectBase(root object)
// this is called multilevel inheritance.

// what about the objects which we creates using the custome constructors?
function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log("draw")
    }
}

const circle = new Circle(1)
const circle2 = new Circle(1)

// lets inspect this circle

// i inspected the circle and circle1
// circle and circle1 have a constructor function property and __proto__ property
// circle ===Derived from==> circleBase ===Derived From ==> root object
// this __proto__ is same as a root object.

// we can say thet objects created by a given constructor will have the same prototypes. 
// similarly all arrays created by same constructor will have same prototypes. 