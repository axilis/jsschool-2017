function cloneArray(array) {
    if (array && array.concat) {
        return array.concat([]);
    } else {
        throw ("Not an instance of array");
    }
}

var ant = cloneArray([1, 2, 3]);
var bee = cloneArray(ant);
bee.push(4);

console.log(ant);
console.log(bee);

function removeSmallest(array) {
    var minValue;
    var minIndex;
    for (var i in array) {
        if (minValue === undefined) {
            minValue = array[i];
            minIndex = i;
        }
        else if (array[i] < minValue) {
            minValue = array[i];
            minIndex = i;
        }
    }

    array.splice(minIndex, 1);
}


var array = [6, 256, 7, 24, 72];
var result = sortArray(array, function (v1, v2) { return v2 - v1; })
removeSmallest(array);
console.log(array);
console.log(result);
