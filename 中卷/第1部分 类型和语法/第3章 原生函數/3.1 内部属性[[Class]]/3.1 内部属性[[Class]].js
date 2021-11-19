// 所有typeof返回值为"obejct"的对象(如数组)都包含一个内部属性[[Class]](我们可以把它看作一个内部的分类,而非传统的面向对象意义上的类).这个属性无法直接访问,一般通过Object.prototype.toString(..)来查看
Object.prototype.toString.call([1, 2, 3])
Object.prototype.toString.call(/regex-literal/i)
Object.prototype.toString.call('aha')
Object.prototype.toString.call(24)
Object.prototype.toString.call(null)
Object.prototype.toString.call(true)
