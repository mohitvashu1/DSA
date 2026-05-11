//Linear search
// let nums = [1,2,3,4,8,9]
// let target = 9
// for(i=0;i<nums.length;i++){
//     if(nums[i]===target){
//         console.log(i);
//     }
// }


//Roman To Int

// const romanToInt = function(s){

//     const map={
//         I:1,
//         V:5,
//         X:10,
//         L:50,
//         C:100,
//         D:500,
//         M:1000
//     }

//     let prev=0
//     let total =0

//     for(let i=s.length-1;i>=0;i--){
//         let current=map[s[i]]
//         // console.log(current);
        
//         if(current>=prev){
//             total+=current
//         }else{
//             total-=current
//         }
//         prev = current

        
//     }
//     console.log(total);
   

// }
// romanToInt("CCCXXIV")



