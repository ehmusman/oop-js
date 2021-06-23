// one of the confusing concept in javascript is that functions are object.
function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log("draw")
    }
}

const circle = new Circle(1)
// console.log(Circle.length)

// write . after name of the function thaen the related properties and methods list will be shown automatically
// if this is an object, the question is that who is the constructor of this object?
// console.log(Circle.constructor)
// it will displays the constructor function (ƒ Function() { [native code] })
// this Function behined the scene construct the that object.
// how can we create this object with Function constructor?

// const Circle1 = new Function('radius', `
//     this.radius = radius
//     this.draw = function () {
//         console.log("draw")
//     }
// `)

// const circle1 = new Circle1(2)
// console.log(circle1)

// there are some built in functions in the object like call and apply. such that
// to initialize an object like const circle = new Circle(1)
// the alternate of this is
// Circle.call({}, 1) // the  first argument is target of "this" used in constructor function. the second argument is the parameter that we are passing to the constructor function. 

// the other mathod is apply. this is exactly like the call method. in call we can pass the arguments explicitly like
// Circle.call({}, 1st arg, 2nd arg, ....)

// but in case of apply we use an array as a second argument.

//in javascripts functions are objects.