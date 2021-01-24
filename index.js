function largestSubarraySum(arr) {
  console.log(arr)
  return search(arr, true, 0)

}


function search(arr, canAdd, idx) {
  let prev = arr[idx - 1]
  let cur = arr[idx]
  let next = arr[idx + 1]

  if ((cur < 0 && canAdd)) {
    search(arr, false, idx + 1)
  }
  if (cur > 0 && !canAdd) {
    search(arr, canAdd, idx + 1)
  }

  console.log(cur)
  console.log(arr)

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
