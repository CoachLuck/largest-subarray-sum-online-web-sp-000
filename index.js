function largestSubarraySum(arr) {
  arr.sort()
  return arr[arr.length - 1] + arr[arr.length - 2]
}
