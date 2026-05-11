let arr =[1,1,1,1]
function GoodPairs(){
    let count=0
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count+=1;
            }
        }
    }
    return count;
}

console.log(GoodPairs());


// let arr = [5,8,9,4,5,3,11,34,5]

// function finndNum(){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]==11){
//             console.log(i);
//         }
//     }
// }
// finndNum()