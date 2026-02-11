

var romanToInt=function(s){
    const map ={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100 ,
        D:500,
        M:1000
    }
     let total =0 ;
     let prev = 0;
  
        for (let i = s.length - 1; i >= 0; i--) {
        let current = map[s[i]];
       
        if (current < prev) {
            total -= current;
        } else {
            total += current;
        }

        prev = current;
    }
    
    return total;
}
let result = romanToInt("CCCXXIV")
console.log(result);