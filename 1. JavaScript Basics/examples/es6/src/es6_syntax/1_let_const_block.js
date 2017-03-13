//1. In ES5 variables get hoisted
try {
    (function () {
        "use script";
        console.log(productId); //undefined
        var productId = 12;
    })();
} catch (error) {
    console.log(error);
}

//2. No hoisting with let
try {
    (function () {
        "use script";
        console.log(productId); //Reference error
        let productId = 12;
    })();
} catch (error) {
    console.log(error);
}


//3.
try {
    (function () {
        "use script";
        let productId = 12;
        console.log(productId); //12
    })();
} catch (error) {
    console.log(error);
}

// var can be declared multiple times
try {
    (function () {
        "use script";
        var productId = 12;
        var productId = 13;
        console.log(productId); //13
    })();
} catch (error) {
    console.log(error);
}

// let can be declared only once
try {
    (function () {
        "use script";
        let productId = 12;
        let productId = 13;
        console.log(productId); //'productId' has already been declared
    })();
} catch (error) {
    console.log(error);
}


//5. variables defined with let have block scope, instead function scope
try {
    (function () {
        "use script";
        var productId = 12;
        {
            var productId = 1000;
            console.log(productId);
        }
        console.log(productId); //1000
    })();
} catch (error) {
    console.log(error);
}

try {
    (function () {
        "use script";
        let productId = 12;
        {
            let productId = 1000;
            console.log(productId);
        }
        console.log(productId); //12
    })();
} catch (error) {
    console.log(error);
}

//6. Block scoping
try {
    (function () {
        "use script";
        {
            let productId = 1000;
        }
        console.log(productId); //Reference error
    })();
} catch (error) {
    console.log(error);
}


//8. productId is scoped to for loop
try {
    (function () {
        "use script";
        let productId = 42;
        for (let productId = 0; productId < 10; productId++) {
        }
        console.log(productId); //42
    })();
} catch (error) {
    console.log(error);
}

//9. i is scoped to function, so closure is formed over i and 
//   at the end of the loop i is set to 11
// JavaScript gotcha!
try {
    (function () {
        "use script";
        let updateFunctions = [];
        for (var i = 0; i <= 10; i++) {
            updateFunctions.push(function () { return i; });
        }
        console.log(updateFunctions[0]()); //11
    })();
} catch (error) {
    console.log(error);
}

//10. const is syntax which allows us to define constants, uppercase is optional
//like let, but can't change value
try {
    (function () {
        "use script";
        const LICENCE_KEY = 1234;
        console.log(LICENCE_KEY); //1234
    })();
} catch (error) {
    console.log(error);
}

//12. Const needs to intialized
try {
    (function () {
        "use script";
        const LICENCE_KEY; //Syntax error
        console.log(LICENCE_KEY);
    })();
} catch (error) {
    console.log(error);
}


//13. 
try {
    (function () {
        "use script";
        const LICENCE_KEY = 1234;
        LICENCE_KEY = 20; //TypeError, assigment to constant variable
        console.log(LICENCE_KEY);
    })();
} catch (error) {
    console.log(error);
}

