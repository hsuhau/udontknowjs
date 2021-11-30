/**
 * finally中的代码可以看作一个回调函数,即无论出现什么情况最后一定会被调用
 */
function foo () {
  try {
    return 24
  } finally {
    console.log('Hello')
  }
  console.log('never runs')
}

console.log(foo())

/**
 * 如果finally中抛出异常(无论是有意还是无意),函数就会在此处种植.如果此前try中国已经有return设置了返回值,则该值会被丢弃
 * @returns {number}
 */
function foo1 () {
  try {
    return 24
  } finally {
    // eslint-disable-next-line no-throw-literal,no-unsafe-finally
    throw 'Oops!'
  }
  console.log('never runs')
}

console.log(foo())



