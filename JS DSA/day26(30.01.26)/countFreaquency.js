let str="javascript"

// function countFreaquency(){
//     let map ={ }
//     for(let i=0;i<str.length-1;i++){
//         let char=str[i]
//        if(map[char]){
//         map[char]+=1
//        }else{map[char]=1}
//     }
//     return map
// }
// console.log(countFreaquency());



let cntFreq=function(){

    let map={ }

    for (const char of str) {
        if(map[char]){
            map[char]++
        }else{
            map[char]=1
        }
        
    }
    return map

}

console.log(cntFreq());