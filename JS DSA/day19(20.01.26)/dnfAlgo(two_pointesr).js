// function sortZeroOne(arr) {
//   let i = 0;
//   let j = 0;
  
//   while (j < arr.length) {
//     if (arr[j] === 0) {
      
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       i++; 
//     }
//     j++; 
//   }
  
//   return arr;
// }

// let arr = [0, 0, 1, 1, 0, 1, 0, 1];
// console.log(sortZeroOne(arr));


let arr= [0,1,0,0,0,1,1,0,1,1,1]

function DNFalgo(){
  let i = 0
  let h= arr.length-1

  while(i<h){
    if(arr[i]==1){
      [arr[i],arr[h]]=[arr[h],arr[i]];
      h--

    }else{i++}
  }
  return arr
}

console.log(DNFalgo());























