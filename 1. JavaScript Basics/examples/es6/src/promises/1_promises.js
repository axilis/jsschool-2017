//1. Happy path.
function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log("Start async task and wait for it to finish.");
        setTimeout(function () {
            console.log("resolved");
            resolve();
        }, 2000);
    });
}

var p = doAsync();
//Start async task and wait for it to finish.
//resolved

//2. Adding support for invalid state.
function doAsync(isRisky) {
    return new Promise(function (resolve, reject) {
        console.log("Start async task and wait for it to finish.");
        if (isRisky) {
            setTimeout(function () {
                console.log("REJECTED!");
                reject();
            }, 500);
        } else {
            setTimeout(function () {
                console.log("resolved");
                resolve();
            }, 2000);
        }
        
    });
}

var p = doAsync();
//Start async task and wait for it to finish.
//resolved

// 2.1 Exercising support for invalid state.
function doAsync(isRisky) {
    return new Promise(function (resolve, reject) {
        console.log("Start async task and wait for it to finish.");
        if (isRisky) {
            setTimeout(function () {
                console.log("REJECTED!");
                reject();
            }, 500);
        } else {
            setTimeout(function () {
                console.log("resolved");
                resolve();
            }, 2000);
        }
    });
}

var p = doAsync(true);
//Start async task and wait for it to finish.
//REJECTED!


//3.1 Acting when async action is done.
function doAsync(isRisky) {
    return new Promise(function (resolve, reject) {
        console.log("Start async task and wait for it to finish.");
        if (isRisky) {
            setTimeout(function () {
                console.log("REJECTED!");
                reject();
            }, 500);
        } else {
            setTimeout(function () {
                console.log("resolved");
                resolve();
            }, 2000);
        }
    });
}

var foo = doAsync(false).then(function () {
    console.log("like");
}, function () {
    console.log("uff");
});


// Start async task and wait for it to finish.
// resolved
// like



//3.2 Acting when async action is done, but with invalid response.
function doAsync(isRisky) {
    return new Promise(function (resolve, reject) {
        console.log("Start async task and wait for it to finish.");
        if (isRisky) {
            setTimeout(function () {
                console.log("REJECTED!");
                reject();
            }, 500);
        } else {
            setTimeout(function () {
                console.log("resolved");
                resolve();
            }, 2000);
        }
    });
}

var bar = doAsync(true).then(function () {
    console.log("like");
}, function () {
    console.log("uff");
});


// Start async task and wait for it to finish.
// REJECTED!
// uff


//5. Passing value from async action.
function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in promise code");
        setTimeout(function () {
            console.log("rejecting...");
            reject("database error");
        }, 500);
    });
}

doAsync().then(function (value) {
    console.log("Fulfilled: " + value);
}, function (reason) {
    console.log("Rejected: " + reason);
});

//in promise code
//rejecting...
//Rejected: database error


//6. Passing value around callback handlers.
function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in promise code");
        setTimeout(function () {
            console.log("resolving...");
            resolve("OK");
        }, 2000);
    });
}
doAsync().then(function (value) {
    console.log("Fulfilled: " + value);
    return "For sure";
}).then(function (value) {
    console.log("Really " + value);
});

//in promise code
//resolving...
//Fulfilled: OK
//Really For sure



//7. How to react when promise is rejected.
function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in promise code");
        setTimeout(function () {
            console.log("rejecting...");
            reject("It's a no go!");
        }, 2000);
    });
}
doAsync().catch(function (reason) {
    console.log("Error: " + reason);
});
//in promise code
//rejecting...
//Error: It's a no go!



//8. Chaining promises. 
function doAnotherAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in another promise code");
        setTimeout(function () {
            resolve("Ok");
        }, 1000);
    });
}

function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in promise code");
        setTimeout(function () {

            resolve(doAnotherAsync());
        }, 2000);
    });
}

doAsync().then(function (value) {
    console.log("Success: " + value);
}, function (reason) {
    console.log("Error: " + reason);
});

//in promise code
//in another promise code
//Success: Ok


//8.1 More readable chaining. Stay with this approach whenever possible.
function doAnotherAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in another promise code");
        setTimeout(function () {
            resolve("Ok");
        }, 1000);
    });
}

function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in promise code");
        setTimeout(function () {
            resolve();
        }, 2000);
    });
}

doAsync()
    .then(doAnotherAsync())
    .then(function (value) {
        console.log("Success: " + value);
    })
    .catch(function (reason) {
        console.log("Error: " + reason);
    });

//in promise code
//in another promise code
//Success: Ok



//9. Chaining promises with rejection.
function doAnotherAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in another promise code");
        setTimeout(function () {
            reject("It's a no go!");
        }, 1000);
    });
}

function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in promise code");
        setTimeout(function () {

            resolve(doAnotherAsync());
        }, 2000);
    });
}
doAsync().then(function (value) {
    console.log("Success: " + value);
}, function (reason) {
    console.log("Error: " + reason);
});

//in promise code
//in another promise code
//Error: It's a no go!


// 9.1 Chaining promisses with rejection that is more readable. Stay with this approach whenver possible.
function doAnotherAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in another promise code");
        setTimeout(function () {
            reject("It's a no go!");
        }, 1000);
    });
}

function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in promise code");
        setTimeout(function () {
            resolve();
        }, 2000);
    });
}

doAsync()
    // Note that we're passing a function. We're not invoking it.
    .then(doAnotherAsync)
    .then(function (value) {
        console.log("Success: " + value);
    })
    .catch(function (reason) {
        console.log("Error: " + reason);
    });

//in promise code
//in another promise code
//Error: It's a no go!



//10. Wrapping sync action in promise with resolve resolution.
function doAsync() {
    return Promise.resolve("Cached");
}
doAsync().then(function (value) {
    console.log("Success: " + value);
}, function (reason) {
    console.log("Error: " + reason);
});

//Success: Cached


//11.  Wrapping sync action in promise with reject resolution.
function doAsync() {
    return Promise.reject("Some error");
}
doAsync().then(function (value) {
    console.log("Success: " + value);
}, function (reason) {
    console.log("Error: " + reason);
});

//Error: Some error


//12. Wait for all promises to be resolved. Parallel execution.
function doAnotherAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in another promise code");
        setTimeout(function () {
            console.log("resolved 2");
            resolve("OK 2");
        }, 1000);
    });
}

function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in promise code");
        setTimeout(function () {
            console.log("resolved 1");
            resolve("OK 1");
        }, 1500);
    });
}


Promise.all([doAnotherAsync(), doAsync()]).then(function (values) {
    console.log("Resolved values: " + JSON.stringify(values));
}, function (reason) {
    console.log("It's a no go!");
});


//in another promise code
//in promise code
//resolved 2
//resolved 1
//Resolved values: ["OK 2","OK 1"]


//13. One reject resolves in reject for all promises.
function doAnotherAsync() { 
    return new Promise(function (resolve, reject) {
        console.log("in another promise code");
        setTimeout(function () {
            console.log("resolved 2");
            resolve("OK 2");
        }, 1000);
    });
}

function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in promise code");
        setTimeout(function () {
            console.log("rejected 1");
            reject("It's a no go! 1");
        }, 1500);
    });
}


Promise.all([doAnotherAsync(), doAsync()]).then(function (valuse) {
    console.log("OK");
}, function (reason) {
    console.log("It's a no go!");
});


//in another promise code
//in promise code
//It's a no go!
//resolved 2
//rejected 1
//It's a no go!


//14.1 Winner takes it all. Primise is resolved according to winner resolution.
function doAnotherAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in another promise code");
        setTimeout(function () {
            resolve("OK 2");
        }, 1000);
    });
}

function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in promise code");
        setTimeout(function () {
            reject("It's a no go! 1");
        }, 1500);
    });
}


Promise.race([doAnotherAsync(), doAsync()]).then(function (valuse) {
    console.log("OK");
}, function (reason) {
    console.log("It's a no go!");
});


//in another promise code
//in promise code
//OK


//14.2 Winner takes it all. Primise is resolved according to winner resolution.
function doAnotherAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in another promise code");
        setTimeout(function () {
            reject("It's a no go! 2");
        }, 1000);
    });
}

function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log("in promise code");
        setTimeout(function () {
            resolve("OK 1");
        }, 1500);
    });
}


Promise.race([doAnotherAsync(), doAsync()]).then(function (valuse) {
    console.log("OK");
}, function (reason) {
    console.log("It's a no go!");
});


//in another promise code
//in promise code
//It's a no go!
