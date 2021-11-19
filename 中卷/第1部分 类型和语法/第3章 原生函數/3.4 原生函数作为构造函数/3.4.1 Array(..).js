const a = new Array(1, 2, 3)
// 构造函数Array(..)不要求必须带new关键字.不带时会被自动补上
const b = Array(1, 2, 3)
const c = [1, 2, 3]

// Array构造函数指代一个数字参数的时候,该参数会被作为数组的预设长度,而非之充当数组中的一个元素
const array1 = new Array(3)
array1.length
array1

const array2 = [undefined, undefined, undefined]
const array3 = []
array3.length = 3

// join(..) 首先假定数组不为空,然后通过length属性值来遍历其中的元素.而map(..)并不做这样的假定,因此结果也往往在于其之外,并可能导致失败
array1.join('-')
array2.join('-')

a.map(function (v, i) {
  return i
})
b.map(function (v, i) {
  return i
})

function fakeJoin (arr, connector) {
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      str += connector
    }
    if (arr[i] !== undefined) {
      str += arr[i]
    }
  }
  return str
}

fakeJoin(new Array(3), '-')

// 我们可以通过下述方式来创建包含undefined单元(而非"空单元")的数组
Array.apply(null, { length: 3 })

// 永远不要创建和使用空单元数组
