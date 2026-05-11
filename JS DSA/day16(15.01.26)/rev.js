// let arr=[0,1,2,3,4,5]


// for (let i = 0; i < arr.length; i++) {
//    arr[i]-=1
    
// }
// console.log(arr);


// let num = [1231];
    
// function Palindrome(){
//   let rem 
//     while(num>0){
        
       

         
//     }

//   return rem
// }

// console.log(Palindrome());


// let num = 1221;

// let rem=num%11

// let rev = (10*num)+rem
//  num =num / 10
//  console.log(num);


let arr= ["h","e","l","l","o"]


  

    function reverseString(){
    let n= arr.length;

let halfArr = Math.floor(n/2)


    for(let i=0;i<halfArr;i++){
     let swap = arr[i]
     arr[i]=arr[n-1+i]
     arr[n-1+i]= swap
    }
    return arr;

    
}

console.log(reverseString());

    



