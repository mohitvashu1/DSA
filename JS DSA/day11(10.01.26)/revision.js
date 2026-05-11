let arr1=[1,2,3,0,0,0];
let m=3;
let arr2=[2,4,5];
let n=3;

function mergeSort(){
    let arr1Copy = arr1.slice(0,m);
    let p1=0;
    let p2=0;
   for(i=0;i<m+n ; i++){
    if(p2>=n|| (p1<m&& arr1Copy[p1]<arr2[p2])){
        arr1[i]=arr1Copy[p1];
        p1++
    }else{
        arr1[i]=arr2[p2]
        p2++
    }
   }
   return arr1
}

console.log(mergeSort());

//p1++