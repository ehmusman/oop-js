// another way of creating object is by constroctor function.
function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log("draw")
    }
}

const circle = new Circle(1)
// here the new operator do three things
//1- creates an empty object
//2- the this keyword in set to point to that object.  
//3- finally it will return that object from this function
// note that we dont have to explicitly return thee this keyword. 

// so we use to ways for creating an object. 
// the factory function
// the constructor function
// there is now new hthing in it. they both are simple javascript functions. 

// if we return an object from a function we reffer it a factory function
// if we use the this keyword along with the new operator, we reffer to that function as a constructor function.

// that what is the difference between these two patterns for creating an object?
// it depends on who is asking the question.
// the developers from the background of C# or java use constructor functions because it looks like creating an instance of a class.
