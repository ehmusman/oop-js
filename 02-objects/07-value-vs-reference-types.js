// in javascript we have two categories of types.
// 1- Value type also called primitive
// 2- reference types

// in Values types we have 
// Numbers, String, Boolean, Symbol, undefined, null// these are the primitive or value types.


// in reference type we have
// Object, functions, arrays
// and we have learnt that functions are also objects
// arays are also objects/

// so we can say in javascript we have two data types
// primitive and objects

// let we use primitives
// let x = 10;
// let y = x;
// x = 20

// console.log(x,y)
// answer is x = 20, y = 10
// in primitiive the value is stored inside the variable.
// when we copied the variable, the value inside the variable is also coppied into the new variable. 
// so they are completely independent of each other



// lets use the reference type
// let a = { value: 10 };
// let b = a
// a.value = 20

// console.log(a, b)

// answer is a = {value: 20}, b = {value:20}

// this is because when we store the value in the variable a, actually this is not stored in the variable. this object is stored somewhere else in the memory. and adddress of that memory location is stored inside that variable.
/// in b = a , the address is coppied in new variable.
// so both a and b are pointing toward the same object in the memory
// so when we change in a or b the changes are immediately visible to the othe variable.

// console.log(a===b), the answer is true
// but if a and b are two different objects with same values inside them are compared, there answer will be false.


// the result is that
// the primirives are coppied by the values
// objects are copied by their reference

// example/
// primitive types
let num = 10

function increase(num) {
    num++;
}

increase(num)
console.log(num) // answer of it will be 10/ this num has a different scope as compared to the scome of num variable used inside the function. in side the function the value is 11. outside the function the value is 10. both variables have different values stored in them/

// reference type
let obj = { value: 10 }

function increment(obj) {
    obj.value++;
}

increment(obj)
console.log(obj) // the answer is obj = {value: 11}. the reason is that both obj inside and outside the functions are referencing towards the same memory location. so the change in one will be easily refactoring change in the other