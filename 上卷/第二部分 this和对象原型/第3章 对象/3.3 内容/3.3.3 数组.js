// 数组支持[]访问形式,不过就像我们之前俺提到过的,数组有一套更加捷古华得知存储机制(不过仍然不限制值的类型).
let myArray = ["foo", 24, "bar"];
console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray[2]);

myArray.baz = "baz";
console.log(myArray.length);
console.log(myArray.baz);

myArray["3"] = "baz";
console.log(myArray.length);
console.log(myArray[3]);


