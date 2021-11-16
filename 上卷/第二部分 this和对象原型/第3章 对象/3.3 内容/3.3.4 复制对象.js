function anotherFunction () {

}

const anotherObject = {
  c: true
}

const anotherArray = []

const myObject = {
  a: 2,
  b: anotherObject, // 引用,不是副本
  c: anotherArray, // 另一个引用
  d: anotherFunction
}

anotherArray.push(anotherObject, myObject)

// 对于JSON安全(也就是说可以被序列化为一个JSON字符串并且可以根据这个字符串解析出一个结构和值完全一样的对象)的对象来说，有一种巧妙的复制方法
const parse = JSON.parse(JSON.stringify(myObj))
console.log(parse)

// 浅拷贝
const newObject = Object.assign({}, myObject)
console.log(newObject)
