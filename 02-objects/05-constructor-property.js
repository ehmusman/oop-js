
// Comstructor function
function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log("draw")
    }
}

const circle = new Circle(1)

// factory function
const createCircle = function (radius) {
    return {
        radius,
        location: {
            x: 1,
            y: 1,
        },
        draw: function () {
            console.log("Draw")
        }
    }
}
const newCircle = createCircle(2)
console.log(newCircle)

// every object in javascript has a constructor property. this property displays the constructor of the the object. 
// in console write circle.constructor
// it will displays the Circle function constructor.

//  if i write newCircle.constructor
/// then the result will be in the form of f Object(){[native code]}

// same result will be appeared if we create the object with object literals. this is built in constructor function in javascript.
// when we use object literals to create an object, behined the scene the javascript uses this constructor function.

// similarly there are some built in constructor function used in the javascript. like
// new String();        // string literals are "", '', ``
// new Boolean();       // boolean literals are true,false
// new Number()         // number literals are , 1,2,3,4 ....
