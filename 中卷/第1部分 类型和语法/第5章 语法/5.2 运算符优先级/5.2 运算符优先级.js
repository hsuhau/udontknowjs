// 运算符优先级 operator precedence
let a = 24
const b = (a++, a)
console.log(a)
console.log(b)

let c = 24
let d
d = c++, c
console.log(c)
console.log(d)

const e = 24
const f = 'foo'
const g = false
const h = e && f || g
  ? g || f ? e : g && f
  : e

false && true || true;
(false && true) || true
false && (true || true)

true || false && false;
(true || false) && false
true || (false && false)
