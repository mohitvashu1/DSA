let arr=[1,1,12,2,8,5,8,5,2,6,4,2,5]

function countFreaquency(){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        }else(map.set(arr[i],1))
    }
    console.log(map);
}

countFreaquency()