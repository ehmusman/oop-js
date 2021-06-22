// let we want to create an other circle. wi th current implementation we have to duplicate the all code. it can create a problem if we have one or more methods in our object.
// in this case we have a draw method. if we duplicate it on two different place and a bug is rised. we have to fix it on each place saperately.  
// this is a very simple object. imagine if the circl eobject has 10 of different methods and we have to fixx the bux in each and it will become more problamatic.
// so object literals is now a good way to create an object if atleast this object has atleast one method.
// if an object has one or method, than we can say that object has behaviour like a person that can do differen things. 
// creating object with the object literals has an issue if this object has a behaviour or method. 
// what is the solution? 
// the solution is to have a factory or a constructor function. 
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
circle.draw()

// now creating it with the factory method

const createCircle = function (radius) {
    return {
        radius,
        location: {
            x: 1,
            y: 1,
        },
        draw: function () {
            console.log("Draw")
        }
    }
}
const newCircle = createCircle(2)
console.log(newCircle)