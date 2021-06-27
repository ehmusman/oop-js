

function Shape() {
}
Shape.prototype.duplicate = function () {
    console.log("duplicate")
}

function Circle(radius) {
    this.radius = radius
}


Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle;
// before the above line the circle object was looking like
// Circle.prototype = Object.create(Object.prototype)


Circle.prototype.draw = function () {
    console.log("Draw")
}

const s = new Shape()
const c = new Circle(2)


// const c = new Circle(2) is similar to
// const c =new Circle.prototype.constructor(2)
// because here we are directly accesing the constructor function from the prototype of Circle constructor.

// when we uncomment the line number 14 where we are inheritting circle object from shape object, that the constructor function of circle is removed.

// now if we access it 
// const s =new Circle.prototype.constructor(2)
// we'll get shape object not the circle object
// the reason of this problem is that we have reset the prototype of circle.

// the best practice is that when we reset the prototype of an bject, we have to reset the constructor of that object.