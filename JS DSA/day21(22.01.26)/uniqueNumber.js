
let arr= [11,11,24,4,58,55,11,47,15,24]
function removeDublicates(){
    let set = new Set();
    for(let i=0;i<arr.length;i++){
         if(set.has(arr[i])){
            set.delete(arr[i])
         }else set.add(arr[i])
        }
   return set;

}
console.log(removeDublicates());
