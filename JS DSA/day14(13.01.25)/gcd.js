let a=27
let b =23

function greatestCommonDivisior(){
    
    let n=Math.min(a,b)
    let num=1
    for(let i=2;i<n;i++){
        if(a%i==0 && b%i==0){
            num=i

        }
    }
    return num
}

console.log(greatestCommonDivisior());