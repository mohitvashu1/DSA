// function SumOfNum(n){
// let sum=0
// while(n>0){
//     let rem=n%10
//     sum+=rem
//     n=Math.floor(n/10)
// }
// return sum;

// }
// console.log(SumOfNum(123434));


let x={name:"Mohit",
    age:21
    
}

// console.log(x.name);
// console.log([x]);
///object are mutable

x.name="vashu"
console.log(x.name);

//How to add new kel value in Existing obj
 x.single=false
 console.log(x);

//  how to delete a existing key
delete x.name
console.log(x);
console.log(this.age);  //undefined


// let y={
//     firstName:"Mohit",
//     lastName:"Choubey",
//     age:21,
    
    
// }
// console.log(y.fullName());

let keyName = "status";
let user = {
    [keyName]: "Active" // This sets user.status = "Active"
};