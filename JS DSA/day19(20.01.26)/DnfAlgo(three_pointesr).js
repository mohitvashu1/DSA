// let arr= [0,1,1,2,2,0,0,0,2,1,1,0,1,1,1,2,2,0,]

// function DNFalgo(){
//     let i =0
//     let j=Math.floor(arr.length)-1
//     let k=arr.length-1

//     while(i<j){
//     if(arr[i]==1){
//       [arr[i],arr[j]]=[arr[j],arr[i]];
//       j--

//     }else{i++}
//   }
//   while(j<k){
//         if(arr[j]==2){
//             [arr[j],arr[k]]=[arr[k],arr[j]];
//             k--
//     }else{j++}}
//     return arr
// }
// console.log(DNFalgo());         /////////////GALAT






let arr= [0,1,1,2,2,0,0,0,2,1,1,0,1,1,1,2,2,0,]

function DNFalgo(){
    let low =0;
    let mid =0;
    let high =arr.length-1;

    while(mid<=high){
        if(arr[mid]==0){
           [arr[low],arr[mid]]=[arr[mid],arr[low]] 
           low++
           mid++
        }else if(arr[mid]==1){
            mid++
        }else{
            [arr[mid],arr[high]]=[arr[high],arr[mid]]
            high--
        }
    }

return arr
}

console.log(DNFalgo());