 let data =[10,20,30,50,60,70];
        let newEl = 40;
        let position = 3;
        console.log(data)
        for(var i=data.length-1;i>=0;i--)
        {
            if(i >= position)
            {
                data[i+1] = data[i];
                if(i==position)
                {
                    data[position]=newEl;
                }
            }
        }
        console.log(data)