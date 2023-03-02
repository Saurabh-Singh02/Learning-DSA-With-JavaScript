let money = 100;
let Tottal_apple = 0;
function buyApple(x) {
    if (x > 0) {
        console.log("I have", x, "Rupees", Tottal_apple, "apples");
        buyMore(x);
    }
    else {
        console.log("I don't have more money", Tottal_apple, "apples")
    }
}
function buyMore(x) {
    Tottal_apple++
    buyApple(x - 10);
}
buyApple(money);