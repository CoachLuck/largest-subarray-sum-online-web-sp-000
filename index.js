function largestSubarraySum(arr) {
  arr.sort()
  arr = arr.filter(e => {e > -1})
}

let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
console.log(largestSubarraySum(array))
