//Single Number

let arr = [7,2,3,4,2,3,4]
var singleNum=function(){
    let num = 0
    for(i=0;i<arr.length;i++){
        num= num ^ arr[i]
       
    }
     console.log(num);
}

singleNum()