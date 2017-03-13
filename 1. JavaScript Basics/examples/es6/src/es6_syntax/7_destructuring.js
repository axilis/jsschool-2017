/*
 * Object
 */

//1. Object destructuring. Will be used a lot with React.js.
try {
    (function () {
        "use script";
        let salary = {
            low: '32000',
            average: '50000',
            high: '75000'
        };
        let {low, average, high} = salary;
        console.log(high); //75000
    })();
} catch (error) {
    console.log(error);
}

//2. Name of destructured variable can be changed.
try {
    (function () {
        "use script";
        let salary = {
            low: '32000',
            average: '50000',
            high: '75000'
        };
        let {low: newLow, average: newAverage, high: newHigh} = salary;
        console.log(newHigh);
    })();
} catch (error) {
    console.log(error);
}


/*
 * Array
 */


//1. Array destructuring
try {
    (function () {
        "use script";
        let salary = ['32000', '50000', '75000'];
        let [low, average, high] = salary;
        console.log(average); //50000
    })();
} catch (error) {
    console.log(error);
}

//2. Array destructuring to head and tail. Often used idiom in functional prgramming (ex. in Haskell programming language).
try {
    (function () {
        "use script";
        let salary = ['32000', '50000', '75000'];
        let [low, ...remaining] = salary;
        console.log(remaining); //["50000", "75000"]
    })();
} catch (error) {
    console.log(error);
}

//5. Array destructuring and defaults.
try {
    (function () {
        "use script";
        let salary = ['32000', '50000'];
        let [low, average, high = '88000'] = salary;
        console.log(high); //8800
    })();
} catch (error) {
    console.log(error);
}


//6. Array destructuring in function signature.
try {
    (function () {
        "use script";
        function reviewSalary([low, average], high = '8800') {
            console.log(average);
        }
        reviewSalary(['32000', '50000']); //5000
    })();
} catch (error) {
    console.log(error);
}


