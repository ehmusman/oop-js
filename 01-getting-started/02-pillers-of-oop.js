// there are popular four core concepts in object oriented programming.
// thes concepts are 
// 1- Encapsulation
// 2- Abstraction
// 3- Inheritance
// 4- polymorphism 

// lets talk about each of them

// before OOP we have procedural programming/ 
// in procedural programming there is a bunch of functions spread everywhere in our programm. we have a bunch of variables to store the data and functions to operate on the data.
// this is a very simple programming style.
// but when our program grows, than there are a lot of functions spread everywhere. making a change in one function and several other functions break. there are a lot of dependencies creates betweeen functions that will be problamatic. 
// OOP came to solve this problem
// in OOP we combine a group of related variables and functions in a unit. and we call that unit an object. 
// we call these variables as properties and functions as methods. 

// lets we have a carr
// make, color, model are the properties of the car
// and start(), stop(), move() are the methods.


/////////////////// Encapsulation///////////
// in OOP we group related variables and functions that operate on them into objects. and this is called encapsulation
// lets take an example related to salery
// in procedural programing.
let baseSalery = 3000;
let overtime = 10;
let rate = 20

function getWage(baseSalery, overtime, rate) {
    return baseSalery + (overtime * rate)
}

const totalSalery = getWage(baseSalery, overtime, rate)


// how to implement it in the OOP
let employee = {
    baseSalery: 3000,
    overtime: 10,
    rate: 20,
    getWage: function () {
        return this.baseSalery + (this.overtime * this.rate)
    }
}

employee.getWage()

// the difference in both approaches is than in OOP the related variables and functions are grouped at the same place. the benefit is that the function has no parameters. but in functional programming the function has three parameters.

// the best functions are those with no parameters.
// the fewer number of parameters, the easier to use and maintain the parameters. so that's encapsulation

/////////////////////////////////////////////////////////
////////////// Abstraction ///////////////////
// lets suppose  we have a DVD player.
// we have some buttons for interaction with it. it has a motherboard with complex logic in it. we dont care what type of logic is implemented in it. all the  complexity is hidden from us. this is abstraction in practice. we can use the same techniqe in OOP.
// we can hide some of the properties and methods from outside. and this gives us a couple of benefits. 
//1- we'll make the interface of those objects simpler. using and understand a few properties and methods is easier thaan the understanding the  many properties and methods. 

//2- it helps us to reduce the impact of change
// lets imagine tomorrow, we'll change the inner or private methods. none of the changes will leak to the outside. because we dont have code that toucehs it outside of the containing object. we may delete a method or change its parameter. but none of the changes will impact the code of application. so with abstraction we'll reduce the impact of change. 


/////////////////////////////////////////////////////////
///////////////////////// Inheritance /////////////////
// inheritace allows us to eliminate the redundant code. thinks of the html elements, text boxes, select boxes,  check boxes and so on. 
// all these elements have a few things common. they should have properties like hidden, innerHTML, and methods like Click() and focus(). 
// instead of redefining these properties and methods to every HTML element. we can define once a generic object called as an HTMLelement and have other objects inherit these properties and methods. so inheritance helps us to eliminate redundant code. 


/////////////////////////////////////////////////////////
//////////// Polymorphism ////////////////////////////////
// poly means many
// morph means forms

// polymorphism means many forms
// in OOP polymorphism is a techniquethat allows us to get rid of long if and else or switch and case statements.
// so in HTML elements example all these objects should have the ability to be render on the page. but the way each element is rendered is different from the others. if we want to render multiple html elements in a procedural way is a very complex. but in OOP we have a render method in each of these objects. and the render method will behave differently depending on the type of object we are referencing. 


////////////////////////////////////////////////
////////// Benefits of OOP
// 1- using encapsulation we group related properties and methods together. this way we can reduce complexity. 
// 2- now we can use these objects in different parts of the program or in different programs. 
// 3- with abstraction we hide the details and complexity and show only the essentials. this techniq reduces complexity and isolate imapc of changes in the code. 
// 4- with inheritance we can eliminate redundant code. 
// and with polymorphism we can refactor ugly switch case statements.