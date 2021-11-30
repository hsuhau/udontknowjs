// 承诺值(value-promise)
// 1.现在值和将来值
let x
const y = 2
console.log(x + y) // NaN

function add (getX, getY, cd) {
  let x, y
  getX(function (xVal) {
    x = xVal
    // 两个都准备好了吗?
    if (y === undefined) {
      cd(x + y)
    }
  })

  getY(function (yVal) {
    y = yVal
    // 两个都准备好了吗
    if (x === undefined) {
      cd(y + x)
    }
  })
}

/**
 * fetchX() fetchY()是同步或者异步函数
 * 为了统一处理现在和将来,我们把它们都变成了将来,即所有的操作都变成了异步的
 */
// add(fetchX, fetchY, function (sum) {
//   console.log(sum) // easy
// })

// 2.Promise值
/**
 * 通过Promise表达这个x+y的例子
 * @param {*} xPromise
 * @param {*} yPromise
 * @returns
 */
function addPromise (xPromise, yPromise) {
  // Promise.all([..])接受一个promise数组并返回一个新的promise
  // 这个新promise等待数组长得所有promise完成
  return Promise.all([xPromise, yPromise])
  // 这个Promise决议之后,我摩恩取得收到的X和Y值并加在一起
    .then((values) => values[0] + values[1]) // values是来自于之前决议的promise的消息数组
}

/**
 *
 */
// fetchX()和fetchY()返回相应值的promise,可能已经就绪
// 也可能以后就绪
/* addPromise(fetchX(), fetchY())
// 我们得到一个这两数组的和的promise
// 现在链式调用then(..)来等待返回promise的决议
  .then(function (sum) {
    console.log(sum)
  })
 */
// Promise归一保证了行为的一致性,我们可以按照不依赖于时间的方式追踪值X和Y.它们是未来值

/**
 * (method) PromiseConstructor.all<any, any>(values: readonly [any, any]): Promise<[any, any]> (+10 overloads)
 * Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
 * @param values — An array of Promises.
 * @returns — A new Promise.
 */

add(fetchX(), fetchY()).then(
  // 完成处理函数
  function (sum) {
    console.log(sum)
  },
  // 处理拒绝函数
  function (err) {
    console.error(err)
  }
)



