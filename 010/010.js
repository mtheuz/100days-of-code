/**
 * @param {number[]} nums
 * @return {void} 
 */
var moveZeroes = function(nums) {
    let n = nums.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (nums[i]  === 0) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]; 
                swapped = true;
            }
        }
        n--; 
    } while (swapped);

    return nums;    
};