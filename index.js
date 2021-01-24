function largestSubarraySum(arr) {
  let i = 0;
  let inNeg = false
  for (let i = 0; i < arr.length; i++) {
    if (!inNeg && arr[i] < 0) {
      inNeg = true
    } else if (inNeg && arr[i] < 0) {
      inNeg = false
    }

  }

  return arr.reduce((a,b) => { return a + b});
}

		let array = [1, 100, 4, 15, 9, 30]
console.log(largestSubarraySum(array))
