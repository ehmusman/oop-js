// inheritance is one of the core concept of OOP that enables and object to own the properties and methods of anothe object. and this makes it easy to reuse code in different parts of the application.
// here is a real world example
// 

// in last lecture we define a method called computeOptimumLocation in Circle class

// here  we are assuming that Circle is a Class and not an object. we have to explain inheritance in classical terms. 
// tomorrow lett we create anothe class called Square and this class also used the same method called computeOptimumLocation().
// and we are assuming that implementation of this method is exactly same accross the both classes. so we dont want to repeat in this implementaion. because if there is a bug in future we dont have to change and fix it at multiple locations. we just have to fix it at same place. 
//so here inheritance comes to rescue us. 

// for implementation of inheritance we'll make a class named d                   
//                                   Shape
//
// and
//
//                               Circle   Square
// circle and square will inherit this class from Shape class. 
// in inheritance we have a feww terms that we should have to familir with.

// Shape class is  Base/Super/Parent   class
// Circle and Square classes are Drived/Sub/Child  classes

// in js we dont have classes we only have objects. so prototypical inheritance come into the picture. 

// so essentially we have two types of inheritances.
// classical and prototypical

