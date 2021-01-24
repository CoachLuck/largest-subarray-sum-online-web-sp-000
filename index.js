function largestSubarraySum(arr) {
  let i = 0;
  let inNeg = false
  let sum = 0;
  arr.sort()
  for (let i = 0; i < arr.length; i++) {
    if (!inNeg && arr[i] < 0) {
      inNeg = true
      console.log("Entered: ", arr[i])
    } else if (inNeg && arr[i] > 0) {
      console.log("adding: ", arr[i])
      sum += arr[i]
    } else if (inNeg && arr[i] < 0) {
      console.log("Exited:", arr[i])
      inNeg = false
    } else {
      console.log("adding: ", arr[i])
      sum += arr[i]
    }

  }


  console.log("SUM:",sum)
  return sum
}

function search(arr, idx) {
  if (arr[0]) {

  }
}

		let array = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(largestSubarraySum(array))
