let arr=[1,4,6,8,9,10]
let target= 4;

function binarySearch() {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // index found
    } 
    else if (arr[mid] < target) {
      left = mid + 1;
    } 
    else {
      right = mid - 1;
    }
  }
  return -1;
  }

console.log(binarySearch());