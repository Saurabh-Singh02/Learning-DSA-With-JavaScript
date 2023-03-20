let queue = [];
let crntSize = queue.length;
let MaxSize = 7;
function enqueue(Value) {
    if (crntSize <= MaxSize) {
        queue[crntSize] = Value;
        crntSize++;
    } else {
        console.log("Queue is allready full.");
    }
}
function display() {
    console.log(queue);
}
function dequeue() {
    if (crntSize > 0) {
        for (let i = 0; i < queue.length; i++) {
            queue[i] = queue[i + 1];
        }
        crntSize--;
        queue.length = crntSize;
    } else {
        console.log("Queue is already empty.");
    }
}
enqueue(10);
enqueue(20);
enqueue(30);
enqueue(40);
dequeue();
display();