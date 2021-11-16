const myObject = {
  a: 2
}

// in操作符会检查属性是否在对象及其[[Prototype]]原型链
console.log(('a' in myObject))
console.log(('b' in myObject))

// hasOwnProperty(..)只会检查属性是否在myObject对象中,不会检查[[Prototype]]链
console.log(myObject.hasOwnProperty('a'))
console.log(myObject.hasOwnProperty('b'))

// 所有的普通对象都可以通过对于Object.prototype的委托来访问hasOwnProperty(..),但是有的对象可能没有连接到Object.prototype(通过Object.create(null)来创建
// Object.prototype.hasOwnProperty.call(myObject, "a"), 借用基础的hasOwnProperty(..)方法并把它显示绑定到myObject上

// 1.枚举
