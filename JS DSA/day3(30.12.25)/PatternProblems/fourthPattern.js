let n = 5;
for(i=0 ; i< n ; i++){
    let space = ""
    for( j=0 ; j<n-(i+1) ; j++){

        space+=" "
    }
    for(k=0 ;k<i+1; k++){
        space+="*"
    }  

    console.log(space);
}

//     *
//    **
//   ***
//  ****
// *****