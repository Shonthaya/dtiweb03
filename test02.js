// แบบ commomJS
let dti01 = require(`./mymodule01.js`)
const dti02 = require(`./mymodule02.js`)

console.log(dti01.score)
dti01.score = 112

console.log(`สี่เหลี่ยมกว้าง 100 ยาว 10 มีพื้นที่ ${dti01.squreArea(100, 10)}`)
console.log(`สี่เหลี่ยมกว้าง 50 ยาว 10 มีพื้นที่ ${dti01.squreArea(100, 10)}`)

console.log(dti02.score)