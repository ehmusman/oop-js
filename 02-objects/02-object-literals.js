// so starting with creating object.
// object literal syntax is
// const circle = {}
// an object in javascript have key value pairs. 
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function () {
        console.log("Draw")
    }
}

// this circl eobject has three members, radius, location and draw.
// draw is a method, other members are called properties.
// properties are used to hold values. a function or method is used to define sme logic
// to access the members of circle object we can use . notation. like
// circle.location and so on.

// object literals is a simplest way to define an object. we can also define the object with factories and constructors. 