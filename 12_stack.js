let data = [];
let crntSize = data.length;
let max = 6;
function push(Value) {
    if (crntSize >= max) {
        console.log("Stack is full you cannot add" + Value);
    } else {
        data[crntSize] = Value;
        crntSize++;
    }
}

function pop() {
    if (crntSize > 0) {
        crntSize--;
        data.length = crntSize;
    } else {
        console.log("Stack is empty");
    }
}

push(10);
push(20);
push(30);
push(40);
push(50);
pop();
pop();
pop();
push(60);
push(70);
push(80);
console.log(data);