//

let arr1= [1,7,8,5]
let arr2= [2,6,3,4]

function mergeArr() {

  let arr = arr1.concat(arr2)

  for(i=0;i<arr.length;i++){
        for(j=0 ; j<arr.length-i-1 ; j++){
            if(arr[j]>arr[j+1]){
                // [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                let swap = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=swap

            }
        }
    }
    return arr

 
}

console.log(mergeArr());