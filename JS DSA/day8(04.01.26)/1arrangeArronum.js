let nums = [1,0,0,1,1,1,0,1,0,0,1]


function moveZeroes() {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 1) {
            nums[k] = nums[i];
            k++;
        }
    }

    for (let i = k; i < nums.length; i++) {
        nums[i] = 1;
    }
    return nums
}

console.log(moveZeroes());