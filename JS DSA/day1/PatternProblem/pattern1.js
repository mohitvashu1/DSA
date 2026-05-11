
function starPrint(){
        
    for(let row =1 ;row<=4; row++){
         let star ="";
        for(let col=1 ;col<=row ; col++ ){
               star+="* "
        }
            console.log(star);
    }
    
}

starPrint();