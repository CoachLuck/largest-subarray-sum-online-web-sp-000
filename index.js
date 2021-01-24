function largestSubarraySum(arr) {
  arr = arr.filter(x => { return x > -1 })
  arr.sort()
  return arr.reduce((t, n) => { return t + n} )
}

let array = [1, 100, 4, 15, 9, 30]
console.log(largestSubarraySum(array))
