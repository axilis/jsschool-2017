//1. 
try {
    (function () {
        "use script";
        let showCategories = function(productId, ...categories){
            console.log(categories instanceof Array); //true
        };
        showCategories(123, 'search', 'advertising');
    })();
} catch (error) {
    console.log(error);
}

//2.
try {
    (function () {
        "use script";
        let showCategories = function(productId, ...categories){
            console.log(categories); //["search", "advertising"]
        };
        showCategories(123, 'search', 'advertising');
    })();
} catch (error) {
    console.log(error);
}

//3.
try {
    (function () {
        "use script";
        let showCategories = function(productId, ...categories){
            console.log(categories); //[]
        };
        showCategories(123);
    })();
} catch (error) {
    console.log(error);
}

//4.
try {
    (function () {
        "use script";
        let showCategories = function(productId, ...categories){
            
        };
        console.log(showCategories.length); //1
    })();
} catch (error) {
    console.log(error);
}

//5. Shallow copy of array
try {
    (function () {
        "use script";
       let prices = [12, 20, 18];
       let newPrices = [...prices];
       newPrices.push(134);
       console.log(prices); //[12, 20, 18]
       console.log(newPrices); //[12, 20, 18, 134]
    })();
} catch (error) {
    console.log(error);
}

//6. spread operator breaks string into characthers 
try {
    (function () {
        "use script";
        let maxCode = Math.max(..."43210"); 
        console.log(maxCode); //4
    })();
} catch (error) {
    console.log(error);
}





