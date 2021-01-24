function largestSubarraySum(arr) {
  let re = /(-.)/
  console.log(arr)
  return search(arr, re)

}

function search(arr, re) {
    let x = arr.join(" ").replace(re, '').split(" ")
    if (x[0] < 0) {
      return search(x, re)
    }
    console.log(x)
}

let array = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(largestSubarraySum(array))
