// From Hashmap

// let nums = [1,2,3]

let nums = [1,2,3,1]
var containsDuplicate = function() {
     let map= {}
     for (const key of nums) {
        map[key]=(map[key] || 0) +1
     }
    for(let i=0 ; i<nums.length;i++){
            if(map[nums[i]]>=2){
                return true
            }
          }
          return false
 
}
console.log(containsDuplicate());


//From Hashmap

var containsDuplicate2 = function() {
    let set = new Set();
    for (const element of nums) {
        set.add(element)
        
    }
     return set.size !==nums.length
    
};
console.log(containsDuplicate2());