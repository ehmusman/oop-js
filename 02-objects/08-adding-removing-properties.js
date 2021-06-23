function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log("draw")
    }
}

const circle = new Circle(1)

// the objects in javascript are dynamic. its means that after creating the object we can add extra properties in them or can remove any property from them.
// we may be wondering why this is usefull in real world?

// imagine we are working with the user object
// when a user create a requedst to the server. a server may addd some extra propert like token in the user object. which may be helpfull for the user.
// so to add the property we can use different notations like

// 1- circle.location = {x: 10}

// another notation is bracket notation. like
// let propertyName = "location"
// 2-
// circle[propertyName] = {x: 10}
// bracket notation is usefull in case when we are adding the properties dynamically
// this is also helpfull when the property name is not valid. like the property name is "center-location"
// circle.center-location = {y: 50}  // it will create an error
// to solve this

// // let propertyName = "center-location"
// 2-
// circle[propertyName] = {x: 10}

// means if we want to add property dynamically or the property name hase some spacial characters or spaces than we can use the bracket notation
////


///////////////////////////
//////////////////////////////////Delete a property
// we can also delete a property from an object
// a real world use case is that is when we get a user object from a database. may b this user object has some properties that we dont want to send it to the client./
// such that, password, credit-card-info
// in hat case we can dynamically delete one or more properties from an object


delete circle.location
delete circle['location']
// so we can use dot notation or brackets