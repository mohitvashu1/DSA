//Find the minimum of three

let a =100,b=5,z=10
 function minOfThree(){
    if(a<b&&a<z){
        return "a is smallest"
    } else if(b<a&& b<z){
         return "b is smallest"

    } else{
        return "z is the smallest"
    }
 }

let ans =minOfThree()
console.log(ans)