// 6.1.3 比较思维模型

// 原型面向对象风格
function Foo (who) {
  this.me = who
}

Foo.prototype.identify = function () {
  return 'I am ' + this.me
}

function Bar (who) {
  Foo.call(this, who)
}

Bar.prototype = Object.create(Foo.prototype)

Bar.prototype.speak = function () {
  console.log('Hello, ' + this.identify() + '.')
}

const b1 = new Bar('b1')
const b2 = new Bar('b2')

b1.speak()
b2.speak()

// 对象关联风格
// 这段代码中我们同样利用了[[Prototype]]把bar1委托给Bar,并把Bar委托给Foo,和上段代码一模一样.我们仍然实现了三个对象之间的关联
// 我们只是把对象关联起来,并不需要那些复杂又令人困惑和模仿类的行为(构造函数 原型 new)
// eslint-disable-next-line no-func-assign
Foo = {
  init: function (who) {
    this.me = who
  },
  identify: function () {
    return 'I am ' + this.me
  }
}

// eslint-disable-next-line no-func-assign
Bar = Object.create(Foo)

Bar.speak = function () {
  console.log('Hello, ' + this.identify() + '.')
}

const bar1 = Object.create(Bar)
bar1.init('bar1')

const bar2 = Object.create(Bar)
bar2.init('bar2')

bar1.speak()
bar2.speak()
