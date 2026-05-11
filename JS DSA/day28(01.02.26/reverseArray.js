// let arr = [1,2,3,4,5,6,7,8];

// function revArray(){
//     let n = arr.length
//     let n2=Math.floor(n/2)
//     for(i=0;i<n2;i++){
//          let swap = arr[i]
//      arr[i]=arr[n-1-i]
//      arr[n-1-i]= swap
//     }
//  return arr 
// }

// console.log(revArray());


function revArray(){
    function swap(nums,i,j){
    let swap = nums[i]
    nums[i]=nums[j]
    nums[j]=swap

}
let nums = [1,2,3,4,5,6,7,8];
let i =0
let j=nums.length-1

while(i<j){
    swap(nums,i,j)
    i++
    j--
}

console.log(nums);
}
revArray()