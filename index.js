function largestSubarraySum(arr) {
  let re = /(-.)/
  console.log(arr)
  return search(arr, re, 0)

}

function search(arr, re, idx) {
    let x = arr.join(" ").replace(re, 0).split(" ")
    if (idx + 1 == arr.length) return arr
    console.log("X: ", x)
    if (parseInt(x[idx]) <= 0) {
      x.shift()
      console.log("ee", x)
      return search(x, re, idx)
    } else {
      return search(x, re, idx + 1)
    }
    console.log("Final: ", x)
}

let array = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(largestSubarraySum(array))
