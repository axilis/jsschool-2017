// Instructions

// Refactor this to ES6.
// Classes should use ES6 class syntax. That includes inheritance as well.
// Substitute what makes sense with arrow functions. Example is in ES6/examples/calculator.js. Arrow function syntax is concise, but not preferred always.
// Use promise where you can.
// Make use of string interpolation (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). 
// Look for HINT comments ;)


// Person class
var Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Person.prototype.toString = function() {
    return this.firstName + " " + this.lastName;
};
// Person class end


// Staff class
function Staff(firstName, lastName, role) {
    this.role = role;

    Person.call(this, firstName, lastName); // call super constructor.
};

// Subclass extends superclass
Staff.prototype = Object.create(Person.prototype);
Staff.prototype.constructor = Staff;

Staff.prototype.toString = function() {
    return this.firstName + " " + this.lastName + "(" + this.role + ")"
};
// Staff class end


// Attendance class
var Attendance = function(enrolledAndStaff) {
    this.enrolledAndStaff = enrolledAndStaff;
    this.notProcessed = enrolledAndStaff.slice(0);
    this.present = [];
    this.absent = [];
};

Attendance.prototype.check = function (callback) {
    // HINT: How about getting rid of _this variable?
    var _this = this;
    
    if (_this.notProcessed.length) {
        var nextToCheck = _this.notProcessed.pop();
        console.log(nextToCheck.toString() + " here? y/n> ");
        
        // Simulate user input. Testing the app is faster.
        setTimeout(function () {
            
            // Fake (random) user input.
            var userInput = Math.random() < 0.2 ? "Y" : "N";
            console.log(userInput);

            if (userInput.trim().toUpperCase() === "Y") {
                _this.present.push(nextToCheck);
            } else {
                _this.absent.push(nextToCheck);
            }
            _this.check(callback);
        }, 300);
    } else {
        callback();
    }
};
// Attendance class end


// AttendanceRepository class
var AttendanceRepository = function() {
        
};

AttendanceRepository.prototype.save = function(attendance, success, error) {
    
    // Simulate saving to server. Saving is async operation.
    // HINT: It eather succeds or fails. I promise you that.
    var successPrecentage = 0.7;
    var isSuccess = Math.random() < successPrecentage;
    if (isSuccess) {
        setTimeout(function() {
            success();        
        }, 2000);    
    } else {
        setTimeout(function() {
            error("500, INTERAL SERVER ERROR");        
        }, 500);
    }
    
};
// AttendanceRepository class end


// App object
App = {
    start: function () {
        // Init with some data.
        var staffList = [
            new Staff("Alpha", "Ant", "teacher"),
            new Staff("Beta", "Bee", "teacher assistant"),
            new Staff("Gamma", "Goose", "technician")
        ];
        var studentList = [
            new Person("Delta", "Dog"),
            new Person("Epsilon", "Eagle"),
            new Person("Zeta", "Zebra"),
            new Person("Eta", "Elephant"),
        ];

        // Set attendance records.
        var attendance = new Attendance(staffList.concat(studentList));
        // HINT: This code promises to gather attendance records and *then* save it to repostiory and *then* present message to the user.
        attendance.check(function () {            
            
            // Save attendance records.
            var repo = new AttendanceRepository();
            repo.save(attendance, function () {
                console.log("Attendance records saved. Attending/Count = " + attendance.present.length + "/" + attendance.enrolledAndStaff.length);
            }, function (errorMessage) {
                console.log("ERROR saving attendance records. Not much you can do. Sorry. :( Error details: " + errorMessage);
            });
        
        });
    }
}
// App object


// Entry point in application.
App.start();