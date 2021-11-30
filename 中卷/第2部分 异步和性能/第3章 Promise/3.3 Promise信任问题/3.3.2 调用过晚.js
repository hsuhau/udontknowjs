// 同步查看是不可能的,所以一个同步任务连无法以这种方式运行来实现按照预期有效延迟另一个毁掉的发生,也就是说,一个Promise决议后,这个Promise上所有的他用过then(..)注册的回调都会在下一个异步时机点上一次被立即调用(再次提醒).这些回调中的任意一个都无法影响或延误对其他回调的调用

const p3 = new Promise(function (resolve, reject) {
  resolve('B')
})

const p1 = new Promise(function (resolve, reject) {
  resolve(p3)
})

const p2 = new Promise(function (resolve, reject) {
  resolve('A')
})

p1.then(function (v) {
  console.log(v)
})

p2.then(function (v) {
  console.log(v)
})
