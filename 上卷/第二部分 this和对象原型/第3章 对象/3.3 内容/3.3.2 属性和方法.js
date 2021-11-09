// 如果访问的对象属性是一个函数,有些开发者喜欢使用不一样的叫法以作区别.由于函数很容被认为是属于某个对象, 在其他语言中,属于对象的函数通常被称为方法,因此把属性访问书城是方法访问也就不奇怪了.
// 从技术角度来说,函数永远不会属于一个对象,所以把对象内部引用的函数称为方法似乎有点不妥
// 确实有些函数具有this引用,有时候这些this确实绘制先调用位置的对象引用.但是这种用法从本质上来说并没有把一个函数变成一个方法,因为this是在运行根据调用位置动态绑定的,所以函数和对象的关系最多也只能是间接关系.
// 无论返回值是什么类型,每次访问对象的属性就是属性访问.如果属性访问返回的是一个函数,那他也并不是要给方法.属性访问返回的函数和其他函数没有任何区别(除了坑内发生的隐式绑定this,就像我们刚才提到的)
function foo() {
    console.log("foo");
}

let someFoo = foo;

let myObject = {
    someFoo: foo
}
console.log(foo);
console.log(someFoo);
console.log(myObject.someFoo);


let myObj = {
    foo:function () {
        console.log("foo");
    }
}

let someFoo = myObj.foo;

console.log(someFoo);
console.log(myObj.foo);