// 没有任何东西能够阻止Promise向你通知它的决议(如果它决议了的话).如果你对一个Promise注册了一个完成回调或拒绝回调,那么Promise在决议时总是会调用其中的一个
// 当然,如果你的调用函数本身包含JavaScript错误,那可能你就看不到你期望的结果,但实际上回调还是被调用了,后面我们介绍如何在回调出错时得到通知,因为就连这样的通知也不会被吞掉
// 但是,如果Promise本身永不会被决议呢?即使这样,Promise也提供了一个解决方案,其使用了一种称为竞态的高级抽象机制
function timeoutPromise (delay) {
  return new Promise(function (_resolve, reject) {
    setTimeout(function () {
      reject('Timeout!')
    }, delay)
  })
}

Promise.race([
  foo(),
  timeoutPromise(3000)
]).then(
  function () {
  // foo(..)及时完成
  },
  function (_err) {
    // 或者foo()被拒绝,或者只是没有按时完成
    // 查看err来了解时哪种情况
  }
)

