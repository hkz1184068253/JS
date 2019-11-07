const user={name: "John", years: 30};
        const {name,years: age,isAdmin='false'}=user;
        console.log(name); 
        console.log(age); 
        console.log(isAdmin);  
        const sumTo1= (n) =>{
        var sum=0;
        for(var i=0;i<=n;i++){
            sum=sum+i;
        }
        return sum;
        }
        console.log(sumTo1(100));
        const sumTo2= (n) =>{
            if(n==1){
                return 1;
            }
            return sumTo2(n-1)+n;
        }
        console.log(sumTo2(100));
        const sumTo3= (n) =>{
            var sum=0;
            sum=n*(n+1)/2;
            return sum;
        }
        console.log(sumTo3(100));
        function Accumulator(startingValue){
            this.value=startingValue;
            this.read=function(){
                this.value+=+prompt('用户输入',"");
            }
        }
        const accumulator = new Accumulator(1)
        accumulator.read(2); // 添加用户输入 value
        accumulator.read(3); // 添加用户输入 value
        console.log(accumulator.value); // 显示这些值的总和 1+2+3 = 6