function largestSubarraySum(arr) {
  var max = Math.max.apply(null, arr)
  console.log("Highest: ", max)
  arr.splice(arr.indexOf(max), 1)
  var max2 = Math.max.apply(null, arr)
  console.log("Second: ", max2)
  return max + max2
}

let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
console.log(largestSubarraySum(array))
