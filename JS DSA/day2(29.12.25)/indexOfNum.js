// let arr =[15 , 74 ,83 ,78 , 43 , 32]

// // console.log(arr.indexOf(78));

// function IndexOfNum(a){

//     return console.log(arr.indexOf(a));
    
// }

// IndexOfNum(78)



// let arr = [15, 74, 83, 78, 43, 32];

// function indexOfNum(a) {
//   return arr.indexOf(a);
// }

// console.log(indexOfNum(78));  // 3



// function indexOfNum(a) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === a) {
//       return i;
//     }
//   }
//   return -1;
// }

 
let arr = [15, 74, 83, 78, 43, 32];

function indexOfNum(arr, a){
  for(i=0; i<arr.length;i++){
    if(arr[i]===a){
      return i
    }
  }
}

console.log(indexOfNum(arr,78));