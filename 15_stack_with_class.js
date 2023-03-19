class Stack {
    item = [];
    CrntSize;
    MaxSize
    constructor(size) {
        this.MaxSize = size;
        this.CrntSize = this.item.length;
    }
    push(Value) {
        if (this.CrntSize >= this.MaxSize) {
            console.log("Stack is full.");
        }
        else {
            this.item[this.CrntSize] = Value;
            this.CrntSize++;
        }
    }
    pop() {
        if (this.CrntSize > 0) {
            this.CrntSize--;
            this.item.length = this.CrntSize;
        } else {
            console.log("Stack is empty.");
        }
    }
    display() {
        console.log(this.item);
    }
}
st = new Stack();
st.push(10)
st.push(20)
st.push(30)
st.push(40)
st.pop()
st.display()