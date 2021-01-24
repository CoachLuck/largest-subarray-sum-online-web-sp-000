function largestSubarraySum(arr) {
//  console.log(arr)
  let x = search(arr, [], true, 0)
//  console.log("Search: ", x)
  let sum = x.reduce((a,b) => a + b )
//  console.log("Sum: ", sum)
  return sum
}


function search(arr, nums, canAdd, idx) {
  let prev = arr[idx - 1]
  let cur = arr[idx]
  let next = arr[idx + 1]
  let isNeg = cur < 0

  if ((isNeg && canAdd)) {
    // negative and can add
    if (arr.length - 1 == idx) {
      nums.push(cur)
    } else {
      search(arr, nums, false, idx + 1)
    }
  } else if (!isNeg && !canAdd) {
    // positive and can't add
    search(arr, nums, false, idx + 1)
  } else if (!isNeg && canAdd) {
    // positive and can add
    nums.push(cur)
    search(arr, nums, true, idx + 1)
  } else if (isNeg && !canAdd) {
    // negative and can't add
    search(arr, nums, true, idx + 1)
  }

  return nums
}

let array = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(largestSubarraySum(array))
