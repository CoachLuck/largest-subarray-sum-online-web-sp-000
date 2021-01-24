function largestSubarraySum(arr) {
  console.log(arr)
  return search(arr, true, 0)

}


function search(arr, canAdd, idx) {
  let prev = arr[idx - 1]
  let cur = arr[idx]
  let next = arr[idx + 1]
  let possibleAdd = []
  if ((cur < 0 && canAdd)) {
    console.log("Odd enter:", cur)
    return (arr.length - 1 == idx) ? possibleAdd.push(cur) : search(arr, false, idx + 1)
  } else if (cur > 0 && !canAdd) {
    console.log("Skipping:", cur)
    arr[idx] = 0
    search(arr, false, idx + 1)
  } else if (cur > 0 && canAdd) {
    console.log("Adding:", cur)
    possibleAdd.push(cur)
    search(arr, true, idx + 1)
  } else if (cur < 0 && !canAdd) {
    console.log("Exit:", cur)
    search(arr, true, idx + 1)
  }

  console.log(possibleAdd)
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
