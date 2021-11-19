// 已在作用域中声明但还没有赋值的变量,是undefined的
let b
console.log(typeof b) // undefined

// 未在作用域中声明的变量,是undeclared的
console.log(typeof c) // undeclared

b // undefined
c // c is not defined
