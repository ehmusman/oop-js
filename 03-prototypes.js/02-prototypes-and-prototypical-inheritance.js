// in javascript we dont have classes. we only have objects/
// how can we implement inheritance by only using objects?
//                          Shape
//
//
//                  Circle
// let we have a circle object and a shape object. keep all the common methods in shape object like computeOptimumLocation. and then somehow we can link circle object with shape object. now we reffer the shape object as the prototype of the circle object.

/////
// so prototype essentially a parent of other object
// every object in javascript except only a single object(which we talk about latter) has a prototype or parent. an it inherits all the members defined in this prototype.


// lets take an example
// in chrome developer tool create an empty object
// let x ={}
// console it
// a property will be shown named as __proto__
// its deprecated. means we cannot access it directly. it is used some timefor troubleshootig of problems.

// this proto has some properties
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()

// we can use these properties in every object like
// x.toString()

// so now we have x object in memory and this x object is linked with an other object called its prototype.
// for our discussion lets call this object as objectBase

// so every object in javascript is directly or indirectly inherited from objectBase.
// objectBase is a root of all the objects and it does not have its root or parent object.

// let make an other object called y
// this is also empty object. console it. it also have __proto__ property in it. that is same as used in x object.


// so now in memory we have two objects X and Y. and both the objects reference objectBase.
// so we have a single instance of object base in memory. we can prove it by

// to get the prototype of an object we use 
// Object.getPrototypeOf(x)
// Object.getPrototypeOf(y)
// for checking if this prototypical object is of same instance write

// Object.getPrototypeOf(x) === Object.getPrototypeOf(y)

// its answer will be true. 
// we didnt write
// x.__proto__ === y.__proto__
// because it has been deprecated. we should not us it in code. but we can acces it  in console.  its answer will be true.

// now the concept of prototype is cleared/
// now we'll talk about the prototypical inheritance
// as previous;ly we use the propert of x object as
// x.toString()
// but we know that this property we didnt define in our object
// behined the scene the javascript engine look for this property in the given object. if it didnt find it, then it find the propert in the root/baseObject/prototype object.
// so this is prototypical inheritance in action.

// when we find a propert of object javascript engine goes through the prototpical chain and fint the member.

// so the prototyp is just a regular object in memory. every object has a prototype  object except root object

