// let nums= [1,1,2,2,3,4,5,6,6,4]
// let val =2

// // let index=nums.filter(num=>num !==val)
// // console.log(index);

// var removeElement = function() {
//     let x=0
//      nums[x]=nums.filter((num=>num !==val))
    

//      return x+1
// };

// console.log(removeElement());


// let num= [0,1,2,2,3,0,4,2]
// let val =2

// function removeInt(){
//     num = num.filter(nums=>nums!==val)

//     return num.length
// }
// console.log(removeInt());


let nums= [0,1,2,2,3,0,4,2,5,2]
let val =2


function removeInt(){
    let k=0
    for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== val) {
    nums[k]=nums[i]

    k++
  }
}
return k
}

console.log(removeInt());