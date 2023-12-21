
const removeElement = (nums, val) => {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }

    nums.length = i;
    return nums;
};

let nums = [3,2,2,3,4,2,7,9];
let val = 2;
console.log(removeElement(nums, val));