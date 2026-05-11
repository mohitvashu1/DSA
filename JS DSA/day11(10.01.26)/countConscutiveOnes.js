let nums= [1,1,0,1,1,1,0,1,0,1,1,1,1,0]

function countOnes(){
    let curr1=0
    let max1=0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]==1){
            curr1+=1
        }else{
            max1=Math.max(curr1,max1);
            curr1=0
        }
        
    }
    return Math.max(max1, curr1)
}

console.log(countOnes());