function largestSubarraySum(arr) {
  let i = 0;
  if (arr.length == 0) return 0;
  return arr.reduce((a,b) => { return a + b});
}

		let array = [1, 100, 4, 15, 9, 30]
console.log(largestSubarraySum(array))
