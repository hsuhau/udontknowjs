function doSomething (opts) {
  // 短路
  // 若opts未赋值(或者不是一个对象),表达式opts.cool会出错,通过短路特性,就不会发生错误
  if (opts && opts.cool) {
  }
}
