for(i=0;i<5; i++){
    let row=""
    let num = "1"
    for(j=0 ; j<=i ; j++){
        row+=num
        if(num==="1"){
            num="0"
        }else{
            num="1"
        }
    }
    console.log(row);
}



// 1
// 10
// 101
// 1010
// 10101