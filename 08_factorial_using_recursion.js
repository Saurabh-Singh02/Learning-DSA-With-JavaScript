function factorial(fact) {
    if (fact == 0) {
        return 1;
    }
    return fact * factorial(fact - 1);

}
let number = 5;
console.log(factorial(number));