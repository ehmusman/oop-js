
function Circle(radius) {
    this.radius = radius;
}

const c1 = new Circle(1)
const c2 = new Circle(1)


Circle.prototype.draw = function () {
    console.log("draw this")
}
Circle.prototype.dia = function () {
    console.log("Diameter is ", this.radius * 2)
}

// the most important thing is that we can initialize the prototype after creating the instance of an object. the reason is that there is a single object and changes in it immediately visible every where.


// how to iterate over instance vs prorotype properties?
// Object.keys(c1) will only iterate on instance members

// whats about for in loop?
for (let key in c1) console.log(key)

// remember, for in loop return the all members.

// in JS instance can be replaced by own. 
// c1.hasOwnProperty("property name")

// if instance property is presnt, the answer will be true, if the propert is in prototype, the answer is false