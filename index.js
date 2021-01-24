function largestSubarraySum(arr) {
  arr.sort()
  console.log(arr)
  return arr[arr.length - 1] + arr[arr.length - 2]
}
