function largestSubarraySum(arr) {
  var max = Math.max.apply(null, arr)
  arr.splice(arr.indexOf(max), 1)
  return Math.max.apply(null, arr) + max
}
