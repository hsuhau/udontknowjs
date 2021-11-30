// listen('click', function handler (evt) {
//   setTimeout(function request () {
//     ajax('http://some.url.1', function response (text) {
//       if (text === 'hello') {
//         handler()
//       }
//       else if (text === 'world') {
//         request()
//       }
//     })
//   }, 500)
// })

// 这里我们得到了三个函数嵌套在一起构成的链,其中每个函数代表异步序列(任务,"进程")中的一个步骤
// 这种代码常常被称为回调地狱(callback hell),有时也被称为毁灭金字塔(pyramid of doom,得名于嵌套产生的横向三角形状)

// 但实际上回调地狱与嵌套和缩进几乎没有什么关系.他引起的问题要比这些严重的多