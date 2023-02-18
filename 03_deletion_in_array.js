  let data=[10,20,30,30,40,50];
        let position= 3;
        console.log(data);
        for(let i=position; i<data.length-1; i++)
        {
            data[i]=data[i+1];
        }
        data.length=data.length-1;
        console.log(data);
        // data.splice(2,1);          //default method for deletion in javascript
        // console.log(data);