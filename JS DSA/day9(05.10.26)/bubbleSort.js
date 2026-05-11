let arr=[2,6,3,4,1,7,8,5]

function sortArr() {
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

console.log(sortArr());




