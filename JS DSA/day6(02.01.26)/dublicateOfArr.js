//   let arr = [1,1,2,2,4,5,5,69,78]

//   function returnK(){
//     let x = 0
//     for(i=0;i<arr.length; i++){
//         if(arr[i]>arr[x]){
//             x=x+1;
//             arr[x]=arr[i]
//         }
//     }   
//     return x+1
//   }

//   console.log(returnK());



let arr = [1,1,2,2,4,5,5,69,78,78]

function returnX(){
    let x=0
    for(i=1;i<arr.length;i++){
        if(arr[i]!==arr[x]){
           x++
            arr[x] = arr[i]
              
        }
    }
    return x+1
}

console.log(returnX());