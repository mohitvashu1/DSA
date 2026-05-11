

let nums=[1,2,2,4,7,5,2,5,7,1]

let hasMap={ }
 

for (const element of nums) {
    if(hasMap[element]){
       hasMap[element]++ 
    }else{hasMap[element]=1}
}
 for(i=0 ; i<nums.length;i++){
    if(hasMap[nums[i]]===1){
        console.log(nums[i]);
    }
 }


