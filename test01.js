// การสร้างและการใช้แบบ commomJS
const dti01 = require(`./mymodule01.js`)
let { sauXXX,scoreXXX } = require("./mymodule02.js")

console.log(dti01.score)
dti01.score = 0 
console.log(dti01.score)

console.log(`10 + 20 = ${dti01.sumNumber(10, 20)}`)
console.log(`สี่เหลี่ยมกว้าง 100 ยาว 10 มีพื้นที่ ${dti01.squreArea(100, 10)}`)

console.log(`sau = ${dti01.sau}`)

console.log(sauXXX);
console.log(scoreXXX);