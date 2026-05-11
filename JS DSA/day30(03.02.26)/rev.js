let nums=[4,3,2,7,8,2,3,1];
 function findMissing(){
    for(let i=0;i<nums.length;i++){
        let indx=Math.abs(nums[i]) -1
        if(nums[indx]>0){
            nums[indx]*=-1
        } 
    }
    let result=[];
    for(let i=0;i<nums.length;i++){
            if(nums[i]>0){
                result.push(i)
            }
            
        }
        console.log(result);

 }
 findMissing()