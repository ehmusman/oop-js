// now lets introduce some complexity in this example.
// lets add a property and method in the object

function Circle(radius) {
    this.radius = radius
    this.defaultLocarion = { x: 0, y: 0 }
    this.computeOptimumLocation = function () {
        // ...
    }
    this.draw = function () {
        // let call this function here
        this.computeOptimumLocation()
        console.log("draw")
    }
}

const circle = new Circle(1)

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

