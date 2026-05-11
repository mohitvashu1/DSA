let arr =[0,1,,,,,,,,,,];
// arr[2]= arr[1]+arr[0]
// console.log(arr);
function fibonacci(){
    for(i=2;i<arr.length;i++){
         arr[i]=arr[i-1]+arr[i-2]
    }
    return arr
       
}
console.log(fibonacci());