let arr = [1,1,2,2,4,5,5,4,11]

// function returnX(){
//     let x=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==arr[x]){
//             arr[x] = arr[i]
            
              
//         }
//     }
//     return arr
// }

// console.log(returnX());

function returnX(){

let ans = 0;
for(i=0;i<arr.length;i++){
    ans ^=arr[i]
}
return ans
}

console.log(returnX());