// 相较于其他原生构造函数,Date(..)和Error(..)的用处要大很多,因为没有对应的常量形式来作为它们的替代
// 创建日期对象必须要使用new Date().Date(..)可以带参数,用来指定那个日期和时间,而不带参数的话则使用当前的日期和时间
// Date(..)主要用来获得当前的Unix时间戳(1970年1月1日开始计算,以秒为单位,以秒为单位).该值可以通过日期对象中的getTime()来获得
// 从ES5开始引入了一个更简单的方法,即静态函数Date.now().对ES5之前的版本我们可以使用下面的polyfill
if (!Date.now) {
  Date.now = function () {
    return (new Date()).getTime()
  }
}

// 创建错误对象(error obejct)主要是为了获得当前运行栈的上下文(大部分JavaScript引擎通过只读属性. stack来访问).栈上下文信息包括函数调用栈信息和产生错误的代码行号,以便于调式(debug)
// 错误对象通常与throw一起使用
function foo (x) {
  if (!x) {
    throw new Error(' x was not provided')
  }
}

// 除Error(..)之外,还有一些针对特定错误类型和原生构造函数,如EvalError(..) RangeError(..) ReferenceError(..) SyntaxError(..) TypeError(..) 和URIError(..).这些构造函数很少被直接使用,它们在程序发生异常(比如试图使用未声明的变量产生ReferenceError错误)时会被自动调用
