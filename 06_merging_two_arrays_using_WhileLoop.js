let data1=[10,30,60,70,90]; //array must be in sorted form
let data2=[20,40,50,80,100];
let data3=[];
let d1=0, d2=0, d3=0;
while(d1<data1.length || d2<data2.length)
{if(data1[d1]<data2[d2])
    {
        data3[d3]=data1[d1];
        d1++;
        // console.log(data3);
    }
    else{
        data3[d3]=data2[d2];
        d2++;
        // console.log(data3);
    }d3++;
}
console.log(data3);