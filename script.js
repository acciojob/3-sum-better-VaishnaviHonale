function threeSum(arr, target) {
// write your code here
	let result = nums[0] + nums[1] + nums[nums.length - 1];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let start = i + 1, end = nums.length - 1;
        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            if (sum > target) {
                end--;
            } else {
                start++;
            }
            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            }
        }
    }
    return result;
  
};

module.exports = threeSum;
