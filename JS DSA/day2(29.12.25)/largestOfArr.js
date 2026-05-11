let arr = [15, 74, 83, 78, 43, 32];


function LargestOfNum(){
    let largestNum = 0;
for(i=0; i<arr.length;i++){
    if(arr[i]>largestNum){
        largestNum=arr[i]
    }
    
}
return largestNum;
}

console.log(LargestOfNum());