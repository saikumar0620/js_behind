
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

// const form = document.getElementById("form")
// const taskinput = document.getElementById("taskinput")
// const taskContainer = document.querySelector(".taskContainer")

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
// })

// console.log(taskinput.value)


// // constructor functions creation: construction function is a special type of function
// // with a multiple similar objects from a single blue print 

// function Student(name,roll,mail) {
//   this.name = name;
//   this.roll = roll;
//   this.mail = mail;
//   this.data = function () {
//     console.log(`hello my name is ${this.name},my roll is ${this.roll} , my mail id is ${this.mail}`)
//   }

// }

// const user1= new Student("sai","1","sai@gmail.com") 
// const user2 = new Student("navn", "2", "navn@gmail.com")
// user1.data()
// console.log(user1.roll)

// scopes

function scopeFunction() {
  console.log(arguments)
  console.log(typeof arguments)
}
scopeFunction("Sai", 23, "madhapur")

// var fun = () => {
//      console.log(arguments)

// }
//  fun("Sai", 23, "madhapur")




