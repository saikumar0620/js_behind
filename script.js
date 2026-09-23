console.log("hello world")

setTimeout(function () {
  console.log("prints after 2 sec")
},2000)


// fetch('https://typicode.com')
// try {
//   console.log("data has been fetched ")
  
// } catch (error) {
//   console.error()
// }

document.getElementById("btn").addEventListener("click", function () {
  console.log("button clicked")
})

// let startDate = new Date().getTime()
// let endDate = startDate;
// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime()
// }
// console.log("10 sec has passed")


const radius = [3, 1, 2, 4]
const area = function (radius) {
  return Math.PI * radius * radius;   
}


const calculateArea = function (radius, logic) {
  const output = []
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]))
  }
  return output;
}
let result = calculateArea(radius, area)
console.log(result)
