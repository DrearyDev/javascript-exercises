const sumAll = function(num1, num2) {
    let number = typeof 3;
    if (typeof num1 !== number || typeof num2 !== number || num1 < 0 || num2 < 0){
        return 'ERROR';
    };

    let greater, smaller;
    (num1 > num2) ? greater = num1 : greater = num2;
    if (greater === num1) smaller = num2;
    else smaller = num1;

    let sum = 0;

    for (let i = smaller; i < greater; i++){
        sum += i;
    };
    
    return (sum + greater);

};
// Do not edit below this line
module.exports = sumAll;
