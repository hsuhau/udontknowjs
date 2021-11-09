// 对象的内容是有一些存储在特定命名位置的(任意类型的)值组成的,我们称之为属性
let myObject = {
    a: 2
};
// 属性访问
console.log(myObject.a); //2
// 键访问
console.log(myObject["a"]); // 2
// 区别: 操作符要求属性名满足标识符的命名规范,而[".."]语法可以接受任意UTF-8/Unicode字符串作为属性名

// 在对象中,属性名永远都是字符串.入股哦你是哟个string(字面量)以外的其他值作为属性名,那它首先会被转换为一个字符串.
// 即使是数字也不例外,虽然在数组下标中使用的的确是是数字,但是再度下个属性名中庶子湖北转换为字符串,所以当心不要搞混对象和数组中数字的用法:
let myObj = {};
myObj[true] = "foo";
myObj[3] = "bar";
myObj[myObj] = "baz";

console.log(myObj["true"]); // foo
console.log(myObj["3"]); // bar
console.log(myObj["[object Object]"]); // baz
