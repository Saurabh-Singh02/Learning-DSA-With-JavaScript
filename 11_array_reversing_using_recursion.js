let data = [10, 20, 30, 40, 50];
let temp;
function ArrReverse(data, start, end) {
    console.log(data);
    if (start <= end) {
        temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        ArrReverse(data, start + 1, end - 1);
    }
}
ArrReverse(data, 0, data.length - 1);