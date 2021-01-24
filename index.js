function largestSubarraySum(arr) {
  let re = /(-.)/
  console.log(arr)
  return search(arr, re)

}

function search(arr, re) {
    let x = arr.join(" ").replaceAll(re, 0).split(" ")
    if (x[0] < 0) {
      arr.shift()
      return search(arr, re)
    }
    console.log(x)
}

		let array = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(largestSubarraySum(array))
