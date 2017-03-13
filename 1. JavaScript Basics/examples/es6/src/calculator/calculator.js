class Calculator {
    constructor() {
        this.firstId = "first";
        this.secondId = "second";
        this.addButtonId = "addButton";
        this.subtractButtonId = "subtractButton";
        this.resultId = "result";

        this.initValues();
        this.hookEvents();        
    }

    initValues() {
        document.getElementById(this.firstId).value = this.getRandomInt(1, 5);
        document.getElementById(this.secondId).value = this.getRandomInt(1, 5);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    hookEvents() {
        var addButton = document.getElementById(this.addButtonId);

        // addButton.addEventListener("click", function () {
        //     console.log("add");
        // });

        // addButton.addEventListener("click", this.add);

        // addButton.addEventListener("click", function () {
        //     this.add();
        // });

        addButton.addEventListener("click", () => this.add());
    }

    add() {
        var first = document.getElementById(this.firstId).value;
        var second = document.getElementById(this.secondId).value;

        var result = parseFloat(first) + parseFloat(second);

        document.getElementById(this.resultId).innerText = result;
    }
}


if (document.readyState == "complete") {
    let todoApp = new Calculator();
}
else {
    document.addEventListener("DOMContentLoaded", event => new Calculator());
}
