let arr=[1,3,2,5,0,]
let n=arr.length;

let totalSum =  n*(n+1)/2


let actualSum=0
for(i=0;i<n;i++){
    actualSum +=arr[i]
}

missingNum=totalSum-actualSum;
console.log(missingNum);