function largestSubarraySum(arr) {
  var max = Math.max.apply(null, arr), // get the max of the array
      maxi = arr.indexOf(max);
  arr[maxi] = -Infinity; // replace max in the array with -infinity
  var secondMax = Math.max.apply(null, arr); // get the new max
  arr[maxi] = max;
  return max + secondMax;
}

let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
console.log(largestSubarraySum(array))
