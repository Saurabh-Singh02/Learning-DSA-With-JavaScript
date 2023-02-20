let data1=[10,20,30,40,50];
let data2=[60,70,80,90,101];
let data3=[];
for(let i=0;i<data1.length;i++)
{
    data3[i]=data1[i];
}
for(let i=0;i<data2.length;i++)
{
    data3[data1.length+i]=data2[i];
}
console.log(data3);