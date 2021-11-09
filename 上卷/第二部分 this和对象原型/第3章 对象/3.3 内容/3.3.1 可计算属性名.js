// 如果你需要通过表达式来计算属性名,那么我们刚刚讲到的myObject[..]这种属性访问语法就可以派上用场了,如可以使用myObject[prefix + name] 但是有时用文字形式来表明对象时这样做是不行的
// ES6增加了可计算属性名,可以在文字形式中使用[]包裹一个表达式来当作属性名
let prefix = 'foo';
let myObject = {
    [prefix + "bar"]: "hello",
    [prefix + "baz"]: "world"
};

console.log(myObject["foobar"]);
console.log(myObject["foobaz"]);
// 可计算属性名最常用的场景可能是ES6的符号(Symbol),本书不做详细介绍.不过捡来来说,他就嗯是一种新的基础数据类型,包含一个不透明且无法预测的值(从技术角度来说就是一个字符串).
// 一般来说你不会用到符号的实际值(因为理论上来说在不同的JavaScript引擎中值是不同的),所以通常你接触到的是符号的名称,比如Symbol.Something(这个名字是我编的)
// let myObj = {
//     [Symbol.Something]: "hello world"
// }