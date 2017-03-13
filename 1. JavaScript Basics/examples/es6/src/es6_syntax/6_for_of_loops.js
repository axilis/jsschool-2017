//1.
try {
    (function () {
        "use script";
        var categories = ["hardware", "software", "vmware"];
        categories.foo = 123;
        for(var i in categories){
            console.log(categories[i]); //"hardware" //"software" //"vmware" //"123"
        }
    })();
} catch (error) {
    console.log(error);
}

// for of loop behaviour is expected
try {
    (function () {
        "use script";
        var categories = ["hardware", "software", "vmware"];
        categories.foo = 123;
        for(var item of categories){
            console.log(item); //"hardware" //"software" //"vmware"
        }
    })();
} catch (error) {
    console.log(error);
}

