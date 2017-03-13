//1.
try {
    (function () {
        "use script";
        var getProductId = function (productId = 1000) {
            console.log(productId);
        };
        getProductId(); //1000
    })();
} catch (error) {
    console.log(error);
}

//2.
try {
    (function () {
        "use script";
        var getProductId = function (productId, type = "software") {
            console.log(productId + ", " + type);
        };
        getProductId(1000); //1000, software
    })();
} catch (error) {
    console.log(error);
}

//3.
try {
    (function () {
        "use script";
        var getProductId = function (productId = 1000, type = "software") {
            console.log(productId + ", " + type);
        };
        getProductId(undefined, "hardware"); //1000, hardware
    })();
} catch (error) {
    console.log(error);
}
