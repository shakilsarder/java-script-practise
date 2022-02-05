// const business = 450;
// const minsiter = 350;

// Largest number checker 
/*
function checker(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1, ' IS THE LARGEST NUMBER ');
    }
    else if (num2 > num1 && num2 > num3) {
        console.log(num2, ' IS THE LARGEST NUMBER ');
    }
    else {
        console.log(num3, ' IS THE LARGEST NUMBER ');
    }
}
checker(50, 155, 9); */

function checker(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        console.log(num1, ' IS THE SMALEST NUMBER ');
    }
    else if (num2 < num1 && num2 < num3) {
        console.log(num2, ' IS THE SMALEST NUMBER ');
    }
    else {
        console.log(num3, ' IS THE SMALEST NUMBER ');
    }
}
checker(500, 8, 99);