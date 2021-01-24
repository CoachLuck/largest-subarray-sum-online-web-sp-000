function largestSubarraySum(arr) {
  arr.sort()
  arr = arr.filter(function(x){ return x > -1 })
  return arr
}

let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
console.log(largestSubarraySum(array))
