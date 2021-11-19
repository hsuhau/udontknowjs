// 封装对象(object wrapper)扮演着十分重要的角色.由于基本类型值没有.length和toString()这样的属性和方法,需要通过封装对象才能访问,此时JavaScript会自动为基本类型值包装(box或者wrap)一个封装对象\
const a = 'abc'
a.length
a.toUpperCase()

// 一般情况,我们不需要直接使用封装对象.最好的办法是让JavaScript引擎自己决定什么时候应该使用封装对象.换句话说,就是应该优先考虑四哟个基本类型值,

// 封装对象释疑
// 我们为false创建了一个封装对象,然而该对象是真值(truthy,即总是返回true,参见第4章),所以这里使用封装对象得到的结果和使用false截然相反
const b = new Boolean(false)
if (!b) {
  console.log('Oops') // 执行不到这里
}

// 如果想要自动封装基本类型值,可以使用Object(..)函数(不带new关键字)
const c = 'cde'
const d = new String(c)
const e = Object(c)

typeof c
typeof d
typeof e

a instanceof String
d instanceof String
e instanceof String

Object.prototype.toString.call(c)
Object.prototype.toString.call(d)
Object.prototype.toString.call(e)
