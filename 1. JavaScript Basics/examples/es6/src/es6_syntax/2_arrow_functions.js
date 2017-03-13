//1. new syntax, fat arrow symbol(maps to, goes to)
try {
    (function () {
        "use script";
        var getPrice = () => 600;
        console.log(typeof getPrice); //function
    })();
} catch (error) {
    console.log(error);
}

//2. 
try {
    (function () {
        "use script";
        var getPrice = () => 600;
        console.log(getPrice()); //600
    })();
} catch (error) {
    console.log(error);
}

//3. when there is just one parameter you can omit parenthesis 
try {
    (function () {
        "use script";
        var getPrice = count => count * 20;
        console.log(getPrice(20)); //40
    })();
} catch (error) {
    console.log(error);
}


//4. 
try {
    (function () {
        "use script";
        var getPrice = (count, tax) => count * 20 * (1 + tax);
        console.log(getPrice(20, 0.25)); //500
    })();
} catch (error) {
    console.log(error);
}


//4. using a block
try {
    (function () {
        "use script";
        var getPrice = (count, tax) => {
            let price = count * 20;
            price *= (1 + tax);
            return price;
        }
        console.log(getPrice(20, 0.25)); //500
    })();
} catch (error) {
    console.log(error);
}

//5. this refers to object that invokes function



//6. 
try {
    (function () {
        "use script";
        var customObject = {
            number: 123,
            process: function () {
                console.log(this);
            }
        };
        customObject.process(); //Object {number: 123}
    })();
} catch (error) {
    console.log(error);
}

//7. Arrow function with object literals behaves unexpected if you use this parameter. 
// ..\calculator\calculator.js
// See file above for more recomended use of arrow functions.
try {
    (function () {
        "use script";
        var customObject = {
            number: 123,
            process: () => console.log(this)
        };
        customObject.process(); //Window
    })();
} catch (error) {
    console.log(error);
}