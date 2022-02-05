function maximumNumber(num) {
    var max = num[0];
    for (var i = 0; i < num.length; i++) {
        var element = num[i]
        if (max < element) {
            max = element;
        }
    }
    return max;
}
function minimumNumber(num) {
    var min = num[0];
    for (var i = 0; i < num.length; i++) {
        var element = num[i]
        if (min > element) {
            min = element;
        }
    }
    return min;
}


var input = [55, 88, -55, -5, 177, 90];
var largest = maximumNumber(input);
var smalest = minimumNumber(input);

console.log('The Maximum number is : ', largest);
console.log('The Minimum number is : ', smalest);