function largestSubarraySum(arr) {
  let i = 0;
  if (arr.length == 0) return 0;
  if (arr[1] < 0) {
    arr.shift()
    arr.shift()
    largestSubarraySum(arr)
  } else if (arr[arr.length - 2] < 0) {
    arr.pop()
    arr.pop()
    largestSubarraySum(arr)
  }

  return arr.reduce((a,b) => { return a + b});
}

let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
console.log(largestSubarraySum(array))
