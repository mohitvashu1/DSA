let arr = [15, 74, 83, 78, 43,83, 32];


function SecondLargestOfNum(){
    let largestNum = 0;
    let secondlargestNum=0;
for(i=0; i<arr.length;i++){
    if(arr[i]>largestNum){
        secondlargestNum=largestNum
        largestNum=arr[i]
        
    }else if(arr[i]<largestNum && arr[i] > secondlargestNum){
        secondlargestNum=arr[i]
    }
    
}
return  secondlargestNum;
}

console.log(SecondLargestOfNum());