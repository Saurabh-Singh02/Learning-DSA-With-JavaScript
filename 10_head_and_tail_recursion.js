function test(x) {
    console.log(x);  //head recursion
    if (x > 0) {
        test(x - 1);
    }
    console.log(x);   //tail recursion
}
let value = 5;
test(value);