//1. syntax sugar
try {
    (function () {
        "use script";
        let price = 6.00, quantity = 30;
        var productView = {
            price,
            quantity
        }
        console.log(productView); //Object {price: 6, quantity: 30}
    })();
} catch (error) {
    console.log(error);
}

//2.
try {
    (function () {
        "use script";
        let price = 6.00, quantity = 30;
        var productView = {
            price,
            quantity,
            calculateValue() {
                return this.price * this.quantity;
            }
        }
        console.log(productView.calculateValue()); //180
    })();
} catch (error) {
    console.log(error);
}

//3.
try {
    (function () {
        "use script";
        var field = "dynamicField"
        var price = 6.00;
        var productView = {
            [field]: price
        }
        console.log(productView); //Object {dynamicField: 6}
    })();
} catch (error) {
    console.log(error);
}