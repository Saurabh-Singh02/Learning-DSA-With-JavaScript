let data = [];
let crntSize = data.length;
function push(Value) {
    data[crntSize] = Value;
    crntSize += 1;
}
function pop() {
    LastRemoveItem = data[crntSize - 1];
    crntSize -= 1;
    data.length = crntSize;
    return LastRemoveItem;
}
function reverseStr(item) {
    for (let index = 0; index < item.length; index++) {
        push(item[index])
    }
    for (let index = 0; index < item.length; index++) {
        item[index] = pop();
    }
}

let str = "Saurabh"
str = str.split("")
reverseStr(str);
console.log(str);
console.log(str.join(""))
