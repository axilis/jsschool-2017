console.clear();
var i = 0;
while (true) {
    if (i++ >= 100) {
        break;
    }

    console.log(i);
}


console.clear();
for (var i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}


// false == undefined, null, "", 0, false
// true == everything else
console.clear();
var x = 100;
if (x === 10) {
    console.log("ant");
} else if (x > 200) {
    console.log("bee");
} else {
    console.log("dog");
}

// Basic example
console.clear();
if (true) {
    console.log("ant");
} else {
    console.log("bee");
}

if ("" || undefined || null || 0 || false) {
    console.log("I wish I was executed. :(");
}

if (1 && "test" && true) {
    console.log("I'm executed.");
}

// implicit type conversion, then comparison :=> NASTY!!!
if (1 == "1") {
    console.log("ant");
}

if (1 === "1") {
    console.log("bee");
}

if (null == undefined) {
    console.log("dog");
}

if (null === undefined) {
    console.log("cow");
}



// I'm not demonstrating this.
grade = 'B';
switch (grade) {
    case 'A':
        console.log("Great job");
        break;
    case 'B':
        console.log("OK job");
        break;
    case 'C':
        console.log("You can do better");
        break;
    default:
        console.log("Oy vey");
        break;
}
