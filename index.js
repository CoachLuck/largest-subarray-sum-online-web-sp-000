function largestSubarraySum(arr) {
  arr = arr.filter(x => { return x > -1 })
  arr.sort()
  return arr.reduce((t, n) => { return t + n} )
}

		let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
console.log(largestSubarraySum(array))
