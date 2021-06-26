// we should avoid to modify the built in objects in javascript. 
// for example
Array.prototype.shuffle = function () {
    //.. dont worry about the algorithm
}

const array = [];
array.shuffle();
// it may creates a problem. because in future, the js developers can add this method in objectBase.


// keep a rule in mind,
// dont modify objects, you dont own!

// dont modify, dont create, dont delete the built in objects. because in future we may use some library that used these built in methods and if we have done any Garr burr with it, we'll spend the whole day in the debugging.