
// let arr= [11,11,24,4,58,55,11,47,15,24]
// function removeDublicates(){
//     let set = new Set();
//     for(let i=0;i<arr.length;i++){
//          set.add(arr[i])
//     }
//     return Array.from(set)

// }
// console.log(removeDublicates());



let arr= [11,11,24,4,58,55,11,47,15,24]
function removeDublicates(){
    let set = new Set(arr);

    return Array.from(set)
}

console.log(removeDublicates());