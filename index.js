function largestSubarraySum(arr) {
  var max = Math.max.apply(null, arr)
  return max
}

let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
console.log(largestSubarraySum(array))
