let n = 5;
for( i = 0 ; i < n ; i ++ ){
let row = ""
for(k=0 ; k<i; k++){
    row+=" "
}
for(j=0 ; j<n-i ; j++){
    row+="*"
}
      console.log(row);
}


// *****
//  ****
//   ***
//    **
//     *

