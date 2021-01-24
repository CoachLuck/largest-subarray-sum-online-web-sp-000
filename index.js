function largestSubarraySum(arr) {
  let i = 0;
  let inNeg = false
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!inNeg && arr[i] < 0) {
      inNeg = true
      console.log("Entered: ", arr[i])
    } else if (inNeg && arr[i] > 0) {
      sum += arr[i]
    } else if (inNeg && arr[i] < 0) {
      console.log("Exited:", arr[i])
      inNeg = false
    } else {
      console.log("adding: ", arr[i])
      sum += arr[i]
    }

  }

  return sum
}

function search(arr, idx) {
  if (arr[0]) {

  }
}

		let array = [-3, 1, 100, 4, 15, 9, 30, -1]
console.log(largestSubarraySum(array))
