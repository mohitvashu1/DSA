let n=7
for(i=1;i<=n;i++){
    let space=i-1
    let str=""

for(j=1;j<=space;j++){
    str+=" "
}
let num=i
while(num<=n){
    str+=num+" "
    num++
}
console.log(str);
}


for(i=n;i>=1;i--){
    let str=""
    for(j=1;j<i;j++){
        str+=" "
    }

    let num=i
    while(num<=n){
        str+=num+" "
        num++
    }
    console.log(str);
}





// 1 2 3 4 5 6 7
//  2 3 4 5 6 7
//   3 4 5 6 7
//    4 5 6 7
//     5 6 7
//      6 7
//       7
//       7
//      6 7
//     5 6 7
//    4 5 6 7
//   3 4 5 6 7
//  2 3 4 5 6 7
// 1 2 3 4 5 6 7