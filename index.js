function largestSubarraySum(arr) {
  let i = 0;
  let inNeg = false
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!inNeg && arr[i] < 0) {
      inNeg = true
      console.log("Entered: ", arr[i])
    } else if (inNeg && arr[i] < 0) {
      inNeg = false
    } else {
      sum += arr[i]
    }

  }

  return sum
}

		let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
console.log(largestSubarraySum(array))
