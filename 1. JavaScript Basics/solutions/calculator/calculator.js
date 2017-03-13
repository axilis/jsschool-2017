var Calculator = function() {
    this.firstId = "first";
    this.secondId = "second";
    this.addButtonId = "addButton";
    this.subtractButtonId = "subtractButton";

    this.resultId = "result";
    
    this.initValues();
    this.hookEvents();
};
    
Calculator.prototype.initValues = function() {
    // It's convenient for testing. No need to enter some values.
    var getRandomInt = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    document.getElementById(this.firstId).value = getRandomInt(1, 5);
    document.getElementById(this.secondId).value = getRandomInt(1, 5);
};

Calculator.prototype.hookEvents = function() {
        var _this = this;

        var addButton = document.getElementById(_this.addButtonId);
        addButton.addEventListener("click", function() { 
            _this.add();
        });

        var subtractButton = document.getElementById(_this.subtractButtonId);
        subtractButton.addEventListener("click", function() {
            _this.subtract();
        });
    };

Calculator.prototype.add = function() {
    var first = document.getElementById(this.firstId).value;
    var second = document.getElementById(this.secondId).value;

    var result = parseFloat(first) + parseFloat(second);

    document.getElementById(this.resultId).innerText = result;
};

Calculator.prototype.subtract = function() {
    var first = document.getElementById(this.firstId).value;
    var second = document.getElementById(this.secondId).value;

    var result = parseFloat(first) - parseFloat(second);

    document.getElementById(this.resultId).innerText = result;
};


/**
 * App entry point.
 */
if (document.readyState == "complete") {
    var app = new Calculator();
}
else {
    document.addEventListener("DOMContentLoaded", function() {
        var app = new Calculator();
    });
}
