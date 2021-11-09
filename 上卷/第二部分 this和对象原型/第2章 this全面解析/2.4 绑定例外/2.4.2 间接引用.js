// 间接引用最容易发生在赋值时发生
function foo() {
    console.log(this.a);
}

let a = 2;
let o = {a: 3, foo: foo};
let p = {a: 4};
o.foo(); // 3
(p.foo = o.foo) // 2