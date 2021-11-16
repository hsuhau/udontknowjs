// 2.5 this词法

function foo_array () {
  // 返回一个箭头函数
  return (a) => {
    console.log(this.a)
  }
}

const obj1 = { a: 2 }
const obj2 = { a: 3 }
const bar_array = foo_array.call(obj1)
bar_array.call(obj2) // 2,不是3

// foo_array()内部创建的箭头函数会捕获调用时foo()的this.由于foo_array()的this绑定到obj1,bar_array(引用箭头函数)的this也会绑定到obj1,箭头函数的绑定无法被修改(new也不行)
// 箭头函数最初能够用于回调函数中,例如事件处理器或者定时器

function foo_array2 () {
  setTimeout(() => {
    console.log(this.a)
  }, 100)
}

const obj_array = {
  a: 2
}

foo_array2.call(obj_array)
