// 1.不是数字的数字

// 如果数学运算的操作数不是数字类型(或者无法解析为常规的十进制或十六进制数字),就无法返回一个有效的数字,这种情况下返回的是NaN
// NaN意指"不是一个数字" not a number.将它理解为无效数值/失败数值/坏数值
const a = 1 / 'foo'
typeof a

a == NaN

a === NaN

// isNaN有一个严重的缺陷,它的检查方式过于死板,就是检查"参数是否不是NaN,也不是数字",但是这样做并不准确
isNaN(a)
const b = 'foo'
isNaN(b)

Number.isNaN(a)
Number.isNaN(b)
