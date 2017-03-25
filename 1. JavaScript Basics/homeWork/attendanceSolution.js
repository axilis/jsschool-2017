// Instructions

// Refactor this to ES6.
// Classes should use ES6 class syntax. That includes inheritance as well.
// Substitute what makes sense with arrow functions. Example is in ES6/examples/calculator.js. Arrow function syntax is concise, but not preferred always.
// Use promise where you can.
// Make use of string interpolation (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).
// Look for HINT comments ;)


// setTimeout promise wrapper.
class Timeout {
    static set(msDelay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, msDelay);
        });
    }
}

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    toString() {
        return `${this.firstName} ${this.lastName}`;
    }

}


class Staff extends Person {
    constructor(firstName, lastName, role) {
        // call super constructor first.
        super(firstName, lastName);

        this.role = role;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (${this.role})`;
    }

}


// Attendance class
class Attendance {
    constructor(enrolledAndStaff) {
        this.enrolledAndStaff = enrolledAndStaff;
        this.notProcessed = enrolledAndStaff.slice(0);
        this.present = [];
        this.absent = [];
    }

    check() {
        return new Promise(resolve => {
            if (this.notProcessed.length) {
                const nextToCheck = this.notProcessed.pop();
                console.log(`${nextToCheck.toString()} here? y/n> `);

                // Simulate user input. Testing the app is faster.
                this.fakeUserInput().
                    then((userInput) => this.processUserInput(userInput, nextToCheck)).
                    then(() => this.check()).
                    then(resolve);

            } else {
                resolve();
            }
        });
    }

    processUserInput(userInput, nextToCheck) {
        if (userInput.trim().toUpperCase() === "Y") {
            this.present.push(nextToCheck);
        } else {
            this.absent.push(nextToCheck);
        }

    }

    fakeUserInput() {
        return new Promise(resolve => {
            Timeout.set(300).
                then(() => {
                    // Fake (random) user input.
                    const yesPercentage = 0.8;
                    const userInput = Math.random() < yesPercentage ? "Y" : "N";
                    console.log(userInput);
                    resolve(userInput);
                });
        });
    }
}


class AttendanceRepository {
    save(attendance) {
        // Simulate saving to server. Saving is async operation.

        return new Promise((resolve, reject) => {
            const successPrecentage = 0.7;
            const isSuccess = Math.random() < successPrecentage;
            if (isSuccess) {
                Timeout.set(2000).then(resolve);
            } else {
                Timeout.set(500).then(() => reject("500, INTERAL SERVER ERROR"));
            }
        });
    };

}


class App {
    static start() {
        // Init with some data.
        const staffList = [
            new Staff("Alpha", "Ant", "teacher"),
            new Staff("Beta", "Bee", "teacher assistant"),
            new Staff("Gamma", "Goose", "technician")
        ];
        const studentList = [
            new Person("Delta", "Dog"),
            new Person("Epsilon", "Eagle"),
            new Person("Zeta", "Zebra"),
            new Person("Eta", "Elephant")
        ];

        // Set attendance records.
        const attendance = new Attendance(staffList.concat(studentList));
        attendance.check().
            then(() => App.saveAttendance(attendance)).
            then(() => App.showSuccessMessage(attendance), App.showErrorMessage);
    }

    static saveAttendance(attendance) {
        const repo = new AttendanceRepository();
        return repo.save(attendance);
    }

    static showSuccessMessage(attendance) {
        console.log(`Attendance records saved. Attending/Count = ${attendance.present.length}/${attendance.enrolledAndStaff.length}`);
    }

    static showErrorMessage(errorMessage) {
        console.log(`ERROR saving attendance records. Not much you can do. Sorry. :( Error details: ${errorMessage}`);
    }
}


// Entry point in application.
App.start();
