function threeSum(arr, target) {
// write your code here
	let result = arr[0] + arr[1] + arr[arr.length - 1];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 2; i++) {
        let start = i + 1, end = arr.length - 1;
        while (start < end) {
            let sum = arr[i] + arr[start] + arr[end];
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
