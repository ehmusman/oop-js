/// no we'll see some thinf interesting/
// let create an object
let person = { name: "usman" }
console.log(person)

// it has all the available methods like 
// person.toString()

// if we iterate over this object we are not going to see this method.
for (let key in person)
    console.log(key)
// in output we have the only key is name. none of the properties or methods defined in prototypes are visible here. 
console.log(Object.keys(person)) // we'll only see the name

// so how we cant iterate over the properties and methods defined in prototypes?
// becuse in javascript our proprtties have attributes attach to them. whats its meaning?
// some time these attributes prevent the properties to be enumerated.
let objectBase = Object.getPrototypeOf(person)
console.log(objectBase)

// now we'll see the attributes attached to the toString property more accurately.
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString")
console.log(descriptor)

// the answer is
// configurable: true  // means we can delete this member if we want to
// enumerable: false    //  thats why we were unable to see the toString method when iterate over the person object.

// value: ƒ toString()

// writable: true  // means we can overwrite this method. we can change its implementstion, we can set its value.
// __proto__: Object

////////////////////////////////////////////////////////////
// when we create our objects we can set these attributes to our properties.
Object.defineProperty(person, "name", {
    // we used it in getter and setter
    // here we'll add the attributes to the property.
    writable: false, // we cannot change its value. its only writeable
    enumerable: false,  // we are not able to iterate it.
    configurable: false  // means we cannot delete it
})

person.name = "farooq"
console.log(person) // answer is usman,

for (let key in person) { console.log(key) } // will not iterate
console.log(Object.keys(person)) // it will return an empty array

delete person.name
console.log(person) // nothing will happen
