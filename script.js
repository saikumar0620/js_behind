
// fetch('https://typicode.com')
// try {
//   console.log("data has been fetched ")
  
// } catch (error) {
//   console.error()
// }

// document.getElementById("btn").addEventListener("click", function () {
//   console.log("button clicked")
// })

// let startDate = new Date().getTime()
// let endDate = startDate;
// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime()
// }
// console.log("10 sec has passed")


// const radius = [3, 1, 2, 4]
// const area = function (radius) {
//   return Math.PI * radius * radius;   
// }

// console.log(radius.map(area))

// const calculateArea = function (radius, logic) {
//   const output = []
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]))
//   }
//   return output;
// }
// let result = calculateArea(radius, area)
// console.log(result)


// const radiuss = [3, 2, 1, 4]
// const areaa = function (radiuss) {
//   return Math.PI*radiuss*radiuss
// }

// const calculates = function (radiuss,formula) {
//   let output = []
//   for (i = 0; i < radiuss.length; i++){
//     output.push(formula(radiuss[i]))
//   }
//   return output
// }
// let res = calculates(radiuss, areaa)
// console.log(res)

const radius = [2, 1, 3, 4]
const logic = function (radius) {
  return Math.PI * radius * radius
}

const cal = function (radius,logic) {
  let output=[]
  for ( i = 0; i < radius.length; i++){
    output.push(logic(radius[i]))
  }
  return output;
}
let result = cal(radius,logic)
console.log(result)