function largestSubarraySum(arr) {
  let i = 0;
  if (arr[0] < 0) {
    arr.shift()
  }
  if (arr[arr.length - 1] < 0) {
    arr.pop()
  }

  return arr;
}

let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
console.log(largestSubarraySum(array))
