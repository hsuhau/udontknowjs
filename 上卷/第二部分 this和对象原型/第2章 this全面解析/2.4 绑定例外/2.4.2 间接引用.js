// 间接引用最容易发生在赋值时发生
function foo () {
  console.log(this.a)
}

const a = 2
const o = { a: 3, foo: foo }
const p = { a: 4 }
o.foo(); // 3
(p.foo = o.foo) // 2
