let nums1=[1,2,3,0,0,0];
let m=3;
let nums2=[2,5,6];
let n=3;


function MergeArray(){
    let result = Array(m+n)
    let k=0
    let i=0
    let j=0

    while(i<m&&j<n){
        if(nums1[i]<nums2[j]){
            result[k]=nums1[i]
            i++
            k++
        }else{result[k]=nums2[j]
            j++
            k++
        }
    }
    
    while(i<m){
         result[k]=nums1[i]
            i++
            k++
    }
    while(j<m){
        result[k]=nums2[j]
            j++
            k++

    }

   for(i=0;i<result.length;i++){
    nums1[i]=result[i]
   }

}
console.log(MergeArray());
