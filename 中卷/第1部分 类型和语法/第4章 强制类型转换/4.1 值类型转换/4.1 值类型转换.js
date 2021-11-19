// 类型转换:将值从一种类型显示转换为另一种类型通常被称为类型转换(type casting)
// 强制类型转换(coercion):隐式类型转换

// JavaScript中的强制类型转换总是返回标量基本类型值,如字符串.数字和布尔值,就是为标量解百纳类型值封装一个相应类型的对象,的你这并非严格意义上的的强制类型转换
// 区分: 类型转换发生在静态类型语言的编译阶段,而强制类型转换则发生在动态类型语言的运行时(runtime)
// 然而在JavaScript中通常将它们统称为强制类型转换

const a = 24
const b = a + '' // 隐式强制类型转换(implicit coercion)
const c = String(a) // 显示强制类型转换(explicit coercion)
