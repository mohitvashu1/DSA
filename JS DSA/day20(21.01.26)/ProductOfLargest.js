let arr = [4,,8,5,8,7,2,0]


function largest(){
    let maxArr= arr[0]
    let secondMAx=[0]
    for(i=0;i<arr.length;i++){
        if(arr[i]>maxArr){
            secondMAx=maxArr
          maxArr= arr[i]
        }else if(arr[i]>secondMAx&&arr[i]!=maxArr)
        {
            secondMAx=arr[i]
        }
    }
    return secondMAx*maxArr
}

console.log(largest());



// let a = [4,,8,5,8,7,2,0]
// function ProductOFlargest(){
//     let k= a[0]
//     let j=[0]
//     for(i=0;i<a.length;i++){
//         if(a[i]>k){
//             j=k
//           k= a[i]
//         }else if(a[i]>j&&a[i]!=k)
//         {
//             j=a[i]
//         }
//     }
//     return j*k
// }

// console.log(ProductOFlargest());




