
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


Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle;


Circle.prototype.draw = function () {
    console.log("Draw")
}

const s = new Shape()
const c = new Circle(2, "red")

// lets introduce a color property in shape constructor. and we want that after inheritance this property should also be shown in the circle object. to solve this we'll pass two arguments in Circle constructor while creating the circle object. 

// first is radius, and second is color. and inside the Circle Constructor we have to call the Shape constructor by pasing the color argument.
// lets see.
