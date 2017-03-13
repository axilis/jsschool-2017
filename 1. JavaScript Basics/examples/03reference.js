// 2 Call by value
function increment(qlux){
    qlux++; 
}

var foo = {
    bar: 5
};
increment(foo.bar);
console.log(foo.bar); // 5


// referentni tipovi
var foo = {
    value: 2
}

var bar = foo;
bar.value = "changed";
console.log(foo.value); // changed
console.log(bar.value); // changed


// referentni tipovi - polja
var foo = [1,2,3];
var bar = foo;

bar[0] = 4;
console.log(foo[0]); // 4
