
//1512. Number of Good Pairs

let num =[1,1,1,1]

function GoodPairs(){

  let count=0
  for (let i = 0; i< num.length; i++){
   for(let j=i+1; j<num.length;j++){
      if(num[i]===num[j]){
         count++;
      }
   }
  }
  return count++

}
console.log(GoodPairs());