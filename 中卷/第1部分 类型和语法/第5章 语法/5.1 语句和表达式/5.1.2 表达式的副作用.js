// 大部分表达式没有副作用
const a = 2
const b = a + 3

// 最常见的有可能有副作用的表达式是函数调用
function foo () {
  c = c + 1
}
// =赋值运算符, +=组合运算符, 链式赋值,chained assignment a=b=c=24
var c = 1
foo()
console.log(c)

// ++ 在前面,它的副作用产生在表达式返回结果值之前,而a++的副作用则产生在之后
let d = 24
const e = d++
console.log(e)
console.log(d)

const obj = {
  a: 24,
  b: 12
}
obj.a
obj.b
// delete副作用是属性被从对象中删除(或者单元从array中删除)
delete obj.a
obj.a
obj.b
