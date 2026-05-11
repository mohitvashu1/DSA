// largest of an array

// let arr = [1,5,45,6,52,85];

// function largestOfArr(){
//     let largest = 0
//     for(i=0; i<arr.length ; i++){
//         if(largest<arr[i]){
//             largest= arr[i]
//         }
//     }
//     return largest;
// }
// console.log(largestOfArr());

// Second Largest of an array

let arr = [1,95,52,45,6,85]; 

function secondLargest(){
    let largest= - Infinity
    let secondLargest = - Infinity
    for(i=0; i<arr.length;i++){
        if(arr[i]> largest){
            secondLargest= largest
            largest= arr[i]
        } else if(arr[i]>secondLargest && arr[i] !== largest){
            secondLargest=arr[i]
        }
    }
    return secondLargest
}

console.log(secondLargest());