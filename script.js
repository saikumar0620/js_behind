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

let startDate = new Date().getTime()
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime()
}
console.log("10 sec has passed")

