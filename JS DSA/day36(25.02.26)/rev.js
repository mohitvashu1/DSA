// Binary search 

let Input = [1,2,3,4,5,6,7,8,9,11,12]
let target = 9


function binarySearch(){
  let left = 0
  let right = Input.length - 1
  
  while(left<=right){
    let mid= Math.floor((left + right)/2)

    if(Input[mid] === target){
        return mid
    }else if(target>Input[mid]){
        left= mid+1
        
    }else{
        right= mid-1
    }
  }

}

console.log(binarySearch());