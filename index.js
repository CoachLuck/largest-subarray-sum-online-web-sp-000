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
  if ((cur < 0 && canAdd)) {
    // negative and can add
    if (arr.length - 1 == idx) {
      nums.push(cur)
    } else {
      search(arr, nums, false, idx + 1)
    }
  } else if (cur > 0 && !canAdd) {
    // positive and can't add
    search(arr, nums, false, idx + 1)
  } else if (cur > 0 && canAdd) {
    // positive and can add
    nums.push(cur)
    search(arr, nums, true, idx + 1)
  } else if (cur < 0 && !canAdd) {
    // negative and can't add
    search(arr, nums, true, idx + 1)
  }

  return possibleAdd
}

// function search(arr, re, idx) {
//     let possibleAdd = []
//     let negatives = []
//     arr.each (num => {
//       if (negatives.length > 0) {
//         if (num < 0) {
//           negatives.push(num)
//         } else {
//           possibleAdd.push(num)
//         }
//       }
//       else {
//           if (num < 0) {
//             negatives.push(num)
//           } else {
//             possibleAdd.push(num)
//           }
//       }
//     })
// }

let array = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(largestSubarraySum(array))
