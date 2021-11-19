const a = {
  valueOf: function () {
    return '24'
  }
}

const b = {
  toString: function () {
    return '24'
  }
}
const c = [4, 2]
c.toString = function () {
  return this.join('')
}

Number(a)
Number(b)
Number(c)
Number('')
Number([])
Number(['abc'])

// ToNumber 将true转换1, false转换为0, undefined转换为NaNc, null转换为0
Number(true)
Number(false)
Number(undefined)
Number(null)

// ToNumber 对字符串的处理基本遵循数值常量的相关规则/语法.处理失败是返回NaN(处理数字常量失败时会产生语法错误).不同之处是ToNumber对以0开头的十六进制数并不按十六进制处理(而是按十进制)
// 对象(包括数组)会首先被转换为相应的基本类型值,如果返沪的是否数字的基本类型值,则在遵循以上规则将被强制转换为数字
// 为了将值转换为相应的基本类型值,抽象操作ToPrimitive会首先(通过内部操作DefaultValue)检查该中是否有valueOf()方法.如果有并且返回基本类型值,就是用改制进行强制类型转.如果没有就使用tostring()的返回值(如果存在)来进行强制类型转换
// 若valueOf()和toString()均不返回基本类型值,会产生TypeError错误
