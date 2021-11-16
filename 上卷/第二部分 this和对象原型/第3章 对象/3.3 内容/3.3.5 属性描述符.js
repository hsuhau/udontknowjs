// 3.3.5 属性描述符
Object.defineProperty(
  myObject, 'a', {
    value: 2,
    writable: false,
    configurable: true,
    enumerable: true
  }
)
myObject.a = 3
console.log(myObject.a)

// todo hsuhau 1.Writable
// todo hsuhau 1.Configurable
