//Find the MAx of three

let a =100,b=5000000000000,z=1000
 function maxOfThree(){
    if(a>b&&a>z){
        return "a is biggest among three"
    } else if(b>a&& b>z){
         return "b is biggest among three"

    } else{
        return "z is the biggest among three"
    }
 }

let ans =maxOfThree()
console.log(ans)