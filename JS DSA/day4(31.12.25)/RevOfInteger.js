// let a = [1,25, 65]
// let b=[58,5,25]
// let c=[]
//  c= a+b

 
// console.log(c);

function RevOfInt(n){
    let copyrev = n
    n=Math.abs(n)
    let rev= 0

    while(n>0){
        num=n%10
        rev=(10*rev)+num
        n=Math.floor(n/10)
    }

    return(copyrev<0) ? -rev : rev
}

console.log(RevOfInt(1534236469));