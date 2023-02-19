 let data=[10,20,30,40,50,60,70,80,90,100];
        let item=70;
        let index= undefined;
        console.log(data)
        for(i=0;i<=data.length;i++)
        {
            if(data[i]==item)
            {
                index=i;
                    break;
            }
        }
        console.log(index);
         // console.log(data.indexOf(item));   //default method available in javascript