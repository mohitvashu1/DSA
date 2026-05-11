let arr = [11,2,11,4,5,87,52,11,2]

function removeDublicate(){
    let hash={}
    for(let i=0;i<arr.length;i++){
        if(!hash[arr[i]]){
            hash[arr[i]]=1
        }else{hash[arr[i]]++}
    }
    for(let i=0;i<arr.length;i++){
        if(hash[arr[i]]==1){
            return arr[i]
        }
    }
}
console.log(removeDublicate());