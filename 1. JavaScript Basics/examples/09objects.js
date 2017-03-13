// kreiranje objekta #1
var foo = { };
foo.x = 100;
console.log(foo.x); // 100


// kreiranje objekta #2
var foo = {
    x : 100
}
console.log(foo.x); // 100
console.log(foo['x']); // 100   praktično



// konstruktor funkcija
var Student = function(name,jmbag){
    this.name = name;
    this.jmbag = jmbag;
}

var pero = new Student("pero", 1234);
var luka = new Student("luka", 1234);

console.log(typeof pero); // object
console.log(typeof Student); // function!

// problem - gdje efikasno s funkcijama? see prototypes
clear(); 

var Student = function(name,jmbag){
    this.name = name;
    this.jmbag = jmbag;
    this.speak = function () {
        console.log(this.name + " speak");
    }
}

var pero = new Student("pero", 1234);
var luka = new Student("luka", 1234);

pero.speak();
luka.speak();

console.log(pero.speak === luka.speak); // false


// Članske funkcije idu na prototip.
var Student = function (name) {
    this.name = name;
}

Student.prototype.speak = function () {
    console.log(this.name + " speak");
}


var pero = new Student("pero");
var luka = new Student("luka");

console.log(pero.speak === luka.speak); // true
