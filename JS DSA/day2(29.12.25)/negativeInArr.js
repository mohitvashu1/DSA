
// let arr = [15, -74, 83, 78, -43, 32];

// function NegativeInArr(){
//     for(i=0 ; i<arr.length;i++){
//         if(arr[i]<0){
//             console.log(arr[i]);
//         }
//     }
// }

// // console.log(NegativeInArr());
// NegativeInArr()


let arr = [15, -74, -83, 78, -43, 32];

function CountNegOfArr(){
    let count = 0;
    for(i=0;i<arr.length ; i++){
        if(arr[i]<0){
            count=count+1
        }
        
    }
    return count;
}

console.log(CountNegOfArr());