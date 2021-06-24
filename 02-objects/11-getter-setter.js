
function Circle(radius) {
    // let color = "red";

    this.radius = radius
    let defaultLocation = { x: 0, y: 0 }

    // this.getDefaultLocation = function () {
    //     return defaultLocation
    // }

    this.draw = function () {

        console.log(defaultLocation)
        console.log("draw")
    }
    Object.defineProperty(this, "defaultLocation", {
        get: function () {
            return defaultLocation
        },
        set: function (value) {
            if (!value.x || !value.y) throw new Error("Invalid Location")
            defaultLocation = value
        }
    })
}

const circle = new Circle(1)
// console.log(circle.draw())

// in the last lec we converted these two (computeOptimumLocation, defaultLocation) members in private members. the more accurately these are not private members of circle object. because technically these are the local variables of constructor Circle function

// in the point of of OOP we can say that these are the private members of circle object

// for simplification we are removing the method. now we have simply a property called default location. we cannot acces it from outside. 

// but what it we want to display the default location somewhare in our application?
// we dont want to modify it. we just want to read it.

// one solution is that create a method inside the function named as getDegaultLocation and return the value defaultLocation from it. and call this function from outside. it will return the value of defaultLocation. 
// such that 
// circle.defaultLocation

// but there is a betther implementation so that we havent to call this function explicitly from outside. such that
// circle.defaultLocation 
// but we should only be able to read it not able to define a value for it. 
// we have Object with property called defineProperty

// the first argument is object that we want to add new property to. this is referred by "this" keyword.
// the second argument is the name of property. that will be defaultLocation in our case.
// the third argument is an object that has key value pairs.
// these are special key value pairs.
// the key is get, and value is a function

console.log(circle.defaultLocation)

// this is called getter,
//this is read only

// if we want to assign the value from outside than we use setter
circle.defaultLocation = { x: 5, y: 6 }
// before assigning any value we can implement any validation
// as we have object in defaultLocation. so we should not assign it a number
console.log(circle.defaultLocation)
