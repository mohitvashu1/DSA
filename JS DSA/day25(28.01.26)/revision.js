// let set = new Set();


// set.add(15)
// set.add(15)
// console.log(set);

// console.log(set.has(15));



// const arr= [1,2,3,4,5,6,7,8]

// const result = arr.map(square);
// square(5)
// console.log(result);

// let x= -1;
// if(x===1){
//     console.log(true);                   
// }else{console.log(false);}                           //OUTPUT- False

// let x= -0;
// if(x===0){
//     console.log(true);
// }else{console.log(false);}              //OUTPUT- True





var gcd=function(a,b){
    let n=Math.min(a,b)
    let number=0
    for(i=2;i<n;i++){
        if(a%i==0 && b%i==0){
            number  =i
        }
    }
    return number;

}

console.log(gcd(40,44));



