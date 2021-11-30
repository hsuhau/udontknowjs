// 自动分号插入 Automatic Semicolon Insertion, ASI
// 因为如果缺少了必要的; , 代码将无法运行,语言的容错性也会降低.ASI能让我们忽略那些不必要的

function foo1 (a) {
  return
  // Unreachable code.(no-unreachable)
  a
}

foo1('return 后面的表达式被忽略')

function foo2 (a) {
  return { a }
}

foo2('return 后面的表达式被忽略')

// 纠错机制
