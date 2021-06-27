// now its time to inherit the Square function from shape function as we inherited circle function from shape function.
// to do this we have to again use the O bject.create() function to create an object with given prototype.
// and then resetting the constructor function for this.

// as the app grows, this may become very messy, to solve this we have to create a function called extend, which will take two parameters,Child and Parent. these are constructor function. we'll call this function each time when we want to create a prototypical inheritance.

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child;

}


function Shape(color) {
    this.color = color
}
Shape.prototype.duplicate = function () {
    console.log("duplicate")
}

function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

extend(Circle, Shape)

Circle.prototype.draw = function () {
    console.log("Draw")
}

function Square(length) {
    this.length = length
}

extend(Square, Shape)
const s = new Shape()
const c = new Circle(2, "red")
