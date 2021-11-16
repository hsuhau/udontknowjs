// 有时候你会希望属性或者赌侠更是不可改变(无论有意还是无意的)

// 很重要的一点是,所有的方法创建的都是浅不变性,也就是说,它们只会影响目标对象和它的直接属性.吐过目标对象引用了其他对象(数组 对象 函数 等),其他都想的内容不受有影响,仍然是可变的

// 1.对象常量
const myObject = {}

Object.defineProperty(
  myObject, 'FAVORITE NUMBER', {
    value: 24,
    writable: false,
    configurable: false
  }
)

// 2.禁止扩展
const myObj = {
  a: 2
}
Object.preventExtensions(myObj)
myObj.b = 3
console.log(myObj.b)

// 3.密封
// Object.seal(..) 会创建一个密封的对象,这个方法实际上会有一个现有对象是能够调用Object.preventExtensions(..)并把现有属性表记为configurable:false
// 所以,蜜蜂之后不仅不能添加新属性,也不能重新配置或者删除任何现有属性(虽然可以修改属性的值)

// 4.冻结
// Object.freeze(..)会创建一个冻结对象,这个方法实际上会有一个现有对象上调用Object.seal(..)并把所有"数据访问"属性标记为writable:false,这样就无法修改它们的值.
// 这个方法是你可以应用自读向上的级别最高的不可变性,它会禁止对于对象本身及其任意直接任意属性的修改(不过就像我们之前说过的,这个对象引用的其他对象是不受影响的).
// 你可以"深度冻结"一个对象,具体方法为,首先在这个对象上调用Object.freeze(..).但是一定要小心.以为这样左右可能会在无意中冻结其他(共享)对象
