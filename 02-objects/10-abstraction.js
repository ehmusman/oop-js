// now lets introduce some complexity in this example.
// lets add a property and method in the object

// function Circle(radius) {
//     this.radius = radius
//     this.defaultLocarion = { x: 0, y: 0 }
//     this.computeOptimumLocation = function () {
//         // ...
//     }
//     this.draw = function () {
//         // let call this function here
//         this.computeOptimumLocation()
//         console.log("draw")
//     }
// }

// const circle = new Circle(1)

// accidently if we run 
// circle.defaultLocarion = false // it may be dangerous for the object
// or if we call the function here which has to be only called inside the circle.draw() function. then it will be weired for our code.

// here the concept is used called Abstraction

// Abstraction means we should hide the details or complexity and show or expose only the essentials
// here we have to hide the propert defaultLocation and method computeOptimumLocation()

//similarly in a DVD player we have inside the implementation details and the outside is public interface detail.
// we have to conside the object just like a DVD player/ we have to hide every implementation detail and expose only the essential detail.


/// many developers are not able to implement the OOP in a good way. their all properties are exposes a little bit change will lead to modify a lot of code.
// so keep in mind the abstraction principle. that is hide the details and expose the essentials.



///////////////////////////////////////////////////// Abstraction implementation

function Circle(radius) {
    // let color = "red";

    this.radius = radius
    let defaultLocation = { x: 0, y: 0 }

    let computeOptimumLocation = function () {
        // ...
        console.log("hello world")
    }
    this.draw = function () {
        // let call this function here
        computeOptimumLocation()
        console.log(defaultLocation)
        console.log("draw")
    }
}

const circle = new Circle(1)
console.log(circle.draw())

// so how we can implemet abstraction here?
// if we initialize the local variable inside the function? it will not be the part of the created object.
// this will be only the part of the object when we use this.color = color
// so in this way we can easily hide a certain members from the outside.


// we'll initialize the defaultLocation property and computeOptimumLocation method with a let keyword.
 // now this is no longer the part of the object and we can not acces the method wit hthis keyword.
 // hers we can access it directly here. due to the concept of Closure in javascript.


 // let we initialize the variable let x,y inside the function. these variables have a limited scope. they are go out of scope when we finish the function execution.
 // a closure determines that what variables are accessible to the inner functions.
 // inner function can acces the variables that are initialized inside its scope and it can also access the variables that are defined in its parent function.

 // dont confuse scope and closur
 // the scope is temporary and it will die
 // every time we call the draw method, these variablkes are recreated and re initialized and after that function they will die. so scope is temporary and closure stays there.

 // when we run the draw function after its execution the variables defaultLocation , computeOptimumLocation will stay in the memory to preserve their there state.