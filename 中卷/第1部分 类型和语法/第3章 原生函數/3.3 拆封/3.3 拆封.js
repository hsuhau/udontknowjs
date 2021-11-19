// 如果想要得到封装对象中的基本类型值,可以使用valueOf()函数
const a = new String('abc')
const b = new Number(42)
const c = new Boolean(true)

a.valueOf()
b.valueOf()
c.valueOf()

// 在需要用到封装对象中的基本类型值的地方会发生隐式拆封.(即强制转换)
const d = new String('def')
const e = d + ''
typeof d
typeof e
