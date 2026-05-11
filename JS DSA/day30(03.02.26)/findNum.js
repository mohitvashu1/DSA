// let nums=[4,3,2,7,8,2,3,1]
// let hasMap={ }
// for (const element of nums) {
//      hasMap[element]=true
    
// }
// let numss=[]
// for(let i=1;i<nums.length;i++){
//     if (!hasMap[i]) {
//         numss.push(i)
//     }
// }


// console.log(numss);

//Follow up: Could you do it without extra space and in O(n) runtime?
// You may assume the returned list does not count as extra space.
let nums=[4,3,2,7,8,2,3,1];
 function findMissing(){
    
    for(let i=0;i<nums.length;i++){
        let indx=Math.abs(nums[i])-1   //x-1   //Math.abs = mod
    
        if(nums[indx]>0){
          nums[indx]*= -1;  //sabko minus se multiply kardenge to jo no nahi hai wo positive bachjayga

        }
    }
    
    let result=[];
    for(i=0;i<nums.length;i++){
        if(nums[i]>0){
            result.push(i+1)
        }
    }
    return result;
   
 }
 console.log(findMissing());