function largestSubarraySum(arr) {
  var max = Math.max.apply(null, arr), // get the max of the array
      maxi = arr.indexOf(max);
  arr[maxi] = -Infinity; // replace max in the array with -infinity
  var secondMax = Math.max.apply(null, arr); // get the new max
  arr[maxi] = max;
  return secondMax + max;
}
