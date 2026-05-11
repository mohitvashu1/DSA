let arr = ["abc","a","b","c","def","def","c","b","abc"]

let hasMap={}
for (const element of arr) {
    // if(hasMap[element]){
    //     hasMap[element]++
    // }else{hasMap[element]=1}
    hasMap[element]=(hasMap[element]||0)+1
}
console.log(hasMap);

for(i=0;i<arr.length;i++){
    if(hasMap[arr[i]]===1){
        console.log(arr[i]);
    }
}