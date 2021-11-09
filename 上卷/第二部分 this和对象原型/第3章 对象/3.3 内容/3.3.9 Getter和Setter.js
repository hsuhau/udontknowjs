let myObj = {
    get a() {
        return 2;
    }
};

Object.defineProperty(
    myObj, // 目标对象
    "b", // 属性名
    { // 描述符
        // 给b设置一个getter
        get: function () {
            return this.a * 2;
        },
        // 确保b会出现在对象的属性列表中
        enumerable: true,
    }
);

console.log(myObj.a); // 2
console.log(myObj.b); // 4

// 不管是对象文字语法中的get a() { .. },还是defineProperty(..)中的显式定义,二者都会在对象中创建一个不包含值的属性,对于这个属性的反问会自动调用要给隐藏阐述,它的返回值会被当作属性访问的返回值:
let myObject = {
    get a() {
        return 2;
    }
};
// 由于我们只定义了a的getter,所以对a的值进行设置时set操作会忽略赋值操作,不会抛出错误.而且即便有合法的setter,由于我们自定义的getter只会返回2,所以set操作时没有意义的
myObject.a = 3;
console.log(myObject.a);

let obj = {
    get a() {
        return this.a;
    },
    set a(val) {
        this.a = val * 2;
    }
};
obj.a = 2;
console.log(obj.a);

