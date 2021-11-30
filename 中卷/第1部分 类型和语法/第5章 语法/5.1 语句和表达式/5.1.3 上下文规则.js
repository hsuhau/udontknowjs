// 在JavaScript语法规则中,有时候同样的语法在不同的情况下会有不同的解释.这些语法规则孤立起来会很难理解

// 1.大括号
// (1)对象常量
// 用大括号定义对象常量(object literal)

// 标签语句 labeled statement
const a = {
  foo: function bar () {}
}

console.log(a)
// 2.代码块
// 3.对象解构
function getData () {
  return {
    b: 24,
    c: 'foo'
  }
}

// ES6中的解构赋值
const { b, c } = getData()
console.log(b, c)

// { .. }还可以用作函数命名参数(named function argument)的对象结构(object destructuring),方便隐式地用对象属性赋值
function foo ({ a, b, c }) {
  console.log(a, b, c)
}
foo({
  a: 24,
  b: 'bar',
  c: [1, 2, 3]
})
