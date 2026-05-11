let n = 6 ; 
for(p = 0 ; p<6;p++){
    let first =""
     for (a=0; a<6-(p);a++){
        first+=" "
     }
     for(v=0; v<p;v++){
        first+="*"
    }
    console.log(first);
}
for(i = 0 ; i<6;i++){
    let star =""
     for (l=0; l<i;l++){
        star+=" "
     }
     for(k=0; k<n-i;k++){
        star+="*"
    }
    console.log(star);
}


//      *
//     **
//    ***
//   ****
//  *****
// ******
//  *****
//   ****
//    ***
//     **
//      *