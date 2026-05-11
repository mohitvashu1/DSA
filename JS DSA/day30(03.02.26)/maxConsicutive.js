let nums = [0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0]
let Curr=0
let max=0
for(i=0;i<nums.length;i++){
    if(nums[i]===1){
        Curr++
    }else{
        max=Math.max(Curr,max)
           Curr =0
    }

}
console.log(Math.max(max,Curr));    