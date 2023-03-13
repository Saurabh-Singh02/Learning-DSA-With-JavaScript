let data = [];
let crntSize = data.length;
let max = 5;
function push() {
    let NewValue= document.getElementById("Element").Value;
    if (crntSize >= max) {
        alert("Stack is full you cannot add" + NewValue);
    } else {
        data[crntSize] = NewValue;
        crntSize+=1;
        document.getElementById("Element").Value="";
        console.log("element added");
    }
}

function pop() {
    if (crntSize > 0) {
        crntSize-= 1;
        data.length = crntSize;
    } else {
        alert("Stack is empty");
    }
}
function display() {
for(let i = 0;i <= crntSize;i++)
console.log("element no.",i, "and value is", data[i]);
}