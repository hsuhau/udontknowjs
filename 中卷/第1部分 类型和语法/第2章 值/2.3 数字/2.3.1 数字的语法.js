// JavaScript中数字字面量一般用十进制表示
let a = 25
let b = 24.3

// 小数点后小数部分最后面的0也可以省略
a = 24.0
// 小数点前的0可以省略
b = 0.3
console.log(a, b)

// 特别大和特别小的数字默认用指数格式显示,与toExponential()函数输出结果相同
const c = 5e10
c
c.toExponential()
const d = c * c
const e = 1 / c

// 由于数字值可以使用Number对象进行封装,因此数字值可以调用Number.prototype的方法.例如,tofixed(..)方法可指定小数部分的显示位数
const f = 1.2345
f.toFixed(0)
f.toFixed(1)
f.toFixed(2)
f.toFixed(3)
f.toFixed(4)
f.toFixed(5)

f.toPrecision(1)
f.toPrecision(2)
f.toPrecision(3)
f.toPrecision(4)
f.toPrecision(5)
f.toPrecision(6)

// 16进制
0x43
0X43

// 8进制
0o43
0O43

// 二进制
0b11
0B11
