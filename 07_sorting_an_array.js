let data=[2,42,53,23,43,657,86,56,87,78,84];
for(let i = 0; i < data.length; i++)
{
    for(let j = 0; j < data.length; j++)
    if(data[j] > data[j+1]){
        let temp = data[j];
        data[j]=data[j+1];
        data[j+1]= temp;
    }
}
console.log(data);