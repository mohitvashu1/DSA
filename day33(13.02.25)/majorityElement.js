let nums = [ 15,15,2,15,4,1,5,4,15]

var majorityElement = function() {
    let candidate = nums[0];
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}

console.log(majorityElement());