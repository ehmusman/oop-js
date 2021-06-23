function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log("draw")
    }
}

const circle = new Circle(1)

//  sometimes we need to iterate over or enumerate the properties of an object.
// we can do that using the for in loop.

for (let key in circle) {
    console.log(key, circle[key])
    // key will display the properties of object.
    // circle[key] will display the values of an object
}


// for getting the properties not the methods?
// we can use typeof operator
for (let key in circle) {
    if (typeof circle[key] !== "function")
        console.log(key, circle[key])
}


// an other aproach to get all the keys of an object
const keys = Object.keys(circle);
console.log(keys) // it will return the keys in the form of array
// with this approach we cannot saperate properties from methods. 


// an other aproach to get all the keys of an object
const values = Object.values(circle);
console.log(values) // it will return the keys in the form of array
// with this approach we cannot saperate properties from methods.



// sometime we wanna know if some object has given property
// for that we use the in operator
if ("radius" in circle) {
    console.log("Radius key is present in the circle")
}