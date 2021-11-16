// 6.2 类与对象
// 我们已经看到了"类"和"行为委托"在理论和思维模型方面的区别,现在看看在真实场景中如何应用这些方法
// 首先看看Web开发中非常典型的一种前端场景:创建UI康健(按钮,下拉列表,等等)

// 6.2.1 控件"类"
// 你可能已经习惯了面向对象设计模式,所以很快会想到一个包含所有通用控件行为的父类(可能叫做Widget)和继承父类的特殊控件子类(比如Button)
// 这里将使用jQuery来操作DOM和CSS,因为这些操作和我们现在讨论的内没有关系,这些代码并不关注你是否使用,或使用那种JavaScript框架(jQuery/Dojo/YUI)来解决问题

/**
 * 下面这段代码展示的是如何在不使用任何"类"辅助库或者语法的清康熙啊,使用纯JavaScript实现类风格的代码
 * @param width
 * @param height
 * @constructor
 */
function Widget (width, height) {
  this.width = width || 50
  this.height = height || 50
  this.$elem = null
}

Widget.prototype.render = function ($where) {
  if (this.$elem) {
    this.$elem.css({
      width: this.width + 'px',
      height: this.height + 'px'
    }).appendTo($where)
  }
}

// 子类
function Button (width, height, label) {
  // 条用"super"构造函数
  Widget.call(this)
  this.label = label || 'Default'
  this.$elm = $('<button>').text(this.label)
}

// 让Button"继承"Widget
Button.prototype = Object.create(Widget.prototype)

// 重写render(..)
Button.prototype.render = function ($where) {
  // "super"调用
  Widget.prototype.render.call(this, $where)
  this.$elm.click(this.onClick.bind(this))
}

Button.prototype.onClick = function (evt) {
  console.log("Button '" + this.label + "' clicked!")
}

$(document).ready(function () {
  const $body = $(document.body)
  const btn1 = new Button(125, 30, 'Hello')
  const btn2 = new Button(150, 40, 'World')
  btn1.render($body)
  btn2.render($body)
})
