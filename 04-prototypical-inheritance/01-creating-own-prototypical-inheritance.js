// lets we have 2 constructors, Circle and Square
// object created by both of these have a method called duplicate.
// we want that we take this method in prototype. such that this method is cannot re initialized in other constructor if its initialized in one constructor.

// to acheie this we'll make a constructor called Shape, than we'll inherit circle from it and square from it. and the duplicate method will remain in shape constructor.

// function Shape() {
// }
// Shape.prototype.duplicate = function () {
//     console.log("duplicate")
// }

// function Circle(radius) {
//     this.radius = radius
// }
// Circle.prototype.draw = function () {
//     console.log("Draw")
// }

// const s = new Shape()
// const c = new Circle(2)

// c  === inherit from ===> circle base(Circle.prototype) === inherit from ===> object base

// s  === inherit from ===> shape base(Shape.prototype) === inherit from ===> object base

// now to set up inheritance here we want that circle base should be inherit from shape base like

// c ==inherit from ==> circle base == inherit from ==> shape base == inherit from ==> object base
// in this way we'll able to aces the duplicate method which was defined in shape base

// in js we have a method for creating an object with given prototype.



function Shape() {
}
Shape.prototype.duplicate = function () {
    console.log("duplicate")
}

function Circle(radius) {
    this.radius = radius
}


Circle.prototype = Object.create(Shape.prototype)
// before the above line the circle object was looking like
// Circle.prototype = Object.create(Object.prototype)


Circle.prototype.draw = function () {
    console.log("Draw")
}

const s = new Shape()
const c = new Circle(2)