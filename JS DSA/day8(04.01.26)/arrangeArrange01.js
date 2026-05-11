 let arr = [1,0,0,1,1,1,0,1,0,0,1]
 //Output Should be [0,0,0,0,0,1,1,1,1,1,1]               
           
 function arrangeArr(){
    let r=0
                                 
    for(i=0;i<arr.length;i++){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        if(arr[i]==0){
            arr[r]=arr[i]
            r++
        }                                        
        
    }
    for ( i=r; i<arr.length ; i++){

        arr[i]=1
    }
    return arr
    
 }
 console.log(arrangeArr());