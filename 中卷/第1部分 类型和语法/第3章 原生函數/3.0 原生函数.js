// 常见的原生函数 native function / 内建函数 built-in function
// String()
// Number()
// Boolean()
// Array()
// Object()
// Function()
// RegExp()
// Date()
// Error()
// // ES6新加入
// Symbol()

const s = new String('Hello World!')
console.log(s.toString())

// 原生函数可以被当做构造函数来使用,但构造出来的独享可能会和我们设想的有所出入
typeof s
s instanceof String
// 通过构造函数创建出来的是封装了基本类型值的封装对象
Object.prototype.toString.call(s)

// 不同浏览器的在开发控制台中显示对象的方式不同(对象序列化, object serialization),所以输出的记过也不尽相同
console.log(s)
