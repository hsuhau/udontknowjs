// 测试显示绑定 隐式绑定优先级
function foo() {
    console.log(this.a);
}

let obj1 = {
    a: 2,
    foo: foo
}

let obj2 = {
    a: 3,
    foo: foo
}


obj1.foo(); //2
obj2.foo(); //3

obj1.foo.call(obj2); //3
obj2.foo.call(obj1); //2

// todo hsuhau new绑定 隐式绑定 优先级

// todo hsuhau 硬绑定 new绑定 优先级



