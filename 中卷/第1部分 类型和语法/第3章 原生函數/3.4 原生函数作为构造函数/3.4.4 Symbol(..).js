// ES6中新加入了一个基本数据类型--符号(Symbol).符号是具有唯一性的特殊值(并非绝对),用它来命名对象属性不容易导致重名.该类型的引入主要源于ES6的一些特殊构造,此外符号也可以自行定义
// 符号可以用作属性名,但无论是在代码还是开发控制台中都无法查看的访问它的值,只会显示为诸如Symbol(Symbol.create)这样的值

// obj[Symbol.iterator] = function () {}

const mySymbol = Symbol('my own symbol')

mySymbol.toString()

// eslint-disable-next-line no-unused-expressions
typeof mySymbol

const a = {}
a[mySymbol] = 'foobar'
Object.getOwnPropertySymbols(a)
