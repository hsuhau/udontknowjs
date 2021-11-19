Object.prototype.toString(undefined)
Object.prototype.toString(null)
Object.prototype.toString(true)

const a = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000
a.toString()

// JSON字符串化
// 工具函数JSON.stringify(..)在将JSON对象序列化为字符串时也用到了toString
JSON.stringify(24)
JSON.stringify('24')
JSON.stringify(null)
JSON.stringify(true)

// 所有安全的JSON值(JSON-safe)(能否呈现为有效JSON格式的值)都可以使用JSON.stringify(..)字符串化
// 不安全的JSON值: undefined function symbol(ES6+) 和包含循环引用(对象之间相互引用,形成一个无限循环)的对象都不符合JSON标准结构,其他迟滞JSON的语言无法处理它们
//
JSON.stringify(undefined)
JSON.stringify(function () {
})
JSON.stringify(
  [1, undefined, function () {}, 4]
)
JSON.stringify(
  {
    a: 2,
    b: function () {
    }
  }
)

const o = {}

const c = { b: 42, c: o, d: function () {} }

o.e = c
// 循环引用会这里会产生错误
// JSON.stringify(c)

c.toJSON = function () {
  return { b: this.b }
}

JSON.stringify(c)

// toJSON()返回的应该是一个适当的值,可以是任何类型,然后再由JSON.stringify(..)对其进行字符串化
// toJSON() 返回一个能够被字符串话的安全的JSON值,而不是 返回一个JSON字符串
const h = {
  val: [1, 2, 3],
  // 可能是我们想要的结果
  toJSON: function () {
    return this.val.slice(1)
  }
}
const i = {
  val: [1, 2, 3],
  // 可能不是我们想要的结果
  toJSON: function () {
    return '[' + this.val.slice(1).join() + ']'
  }
}

JSON.stringify(h)
JSON.stringify(i)

const j = {
  a: 24,
  b: '24',
  c: [1, 2, 3]
}

// replacer参数,可以是数组或者函数,用来指定对象序列化过程中哪些属性应该被处理,那些应该被排除,和toJSON()很像
// 如果replacer是函数,它的参数k在第一次调用时为undefined(巨石堆对象本身调用的那次).if语句将属性'c'排除掉,由于字符串话是递归的,因此数组[1,2,3]中的每个元素都会通过参数v传递给replacer,即1,2和3,参数k是它们的索引值,即0,1和2
JSON.stringify(j, ['b', 'c'])
JSON.stringify(j, function (k, v) {
  if (k !== 'c') {
    return v
  }
})

// JSON.stringify()还有一个可选参数space,用来指定输出的缩进格式.space为正整数时是指定每一级缩进的字符数,它可以是字符串,此时最前面的十个字符被用于每一级的缩进
// 1.字符串.数字.布尔值和null的JSON.stringify(..)规则与toString()基本相同
// 2.如果传递给JSON.stringify(..)的对象中定义了toJSON()方法,那么该方法会在字符串化前调用,以便将对象转换为安全的JSON值
JSON.stringify(j, null, 3)
JSON.stringify(j, null, '-----')
