
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = (nums) =>{
    for (let i = 0, j = 1, k = 2; k < nums.length; i++, j  = i + 1, k =  j+ 1 ){
        console.log(nums[i],nums[j],nums[k])
        if( (i < j) && (j < k) && (nums[i] < nums[j]) && (nums[j] < nums[k])){
            return true
        }
    }
    return false
}

console.log(increasingTriplet([20,100,10,12,5,13]))