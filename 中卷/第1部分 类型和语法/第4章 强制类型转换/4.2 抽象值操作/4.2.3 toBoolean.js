// 1.假值(falsy value)
// JavaScript中的值可以被分为以下两类
// (1).可以被强制类型转换为false的值
// (2).其他(可以被强制转换为true的值)

// JavaScript规范定义了一小搓可以被强制转换为false的值
undefined
null
false +
0 -
0
NaN
''

// 2.假值对象 (falsy object)
// 所有的对象都是真值

// 定义:封装了价值的对象
Boolean(new Boolean(false) && new Number(0) && new String(''))

// 3.真值
// 定义:真值就是假值列表之外的值
Boolean('false' && '0' && "''")

// 举例:空数组,空对象,空函数 均是真值
Boolean([] && {} && function () {})
