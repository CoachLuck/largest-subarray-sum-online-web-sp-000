function largestSubarraySum(arr) {
  arr.sort()
  arr = arr.filter(x => { return x > -1 })
  return arr
}

let array = [1, 100, 4, 15, 9, 30]
console.log(largestSubarraySum(array))
