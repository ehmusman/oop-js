
// Comstructor function
function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log("draw")
    }
}

const circle = new Circle(1)

// factory function
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