function largestSubarraySum(arr) {
  let re = /(-.)/
  console.log(arr)
  return search(arr, re, 0)

}

function search(arr, re, idx) {
    let x = arr.join(" ").replace(re, 0).split(" ")
    console.log("X: ", x)
    if (parseInt(x[idx]) <= 0) {
      x.shift()
      console.log("ee", x)
      search(x, re)
    }
    console.log(x)
}

let array = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(largestSubarraySum(array))
