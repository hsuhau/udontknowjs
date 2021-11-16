// 在继承或者实例化时,JavaScript的对象机制并不会自动执行复制行为.
// 简单来说,JavaScript中只有对象,并不存在可以被实例化的类.一个对象并不会被复制到其他对象,它们会被关联起来
// 由于其他语言中类表现出来的都是复制行为,因此JavaScript开发者也想除了一个方法来模拟类的复制行为,这个方法就是混入.

// 4.4.1 显式混入
function mixin (source, target) {
  for (const key in source) {
    if (!key in target) {
      target[key] = source[key]
    }
  }
  return target
}

const Vehicle1 = {
  engines: 1,
  ignition: function () {
    console.log('开启引擎')
  },
  drive: function () {
    // this.ignition();
    console.log('滚轮前进')
  }
}

const Car1 = mixin(Vehicle1, {
  wheels: 4,
  drive: function () {
    Vehicle1.drive.call(this)
    console.log('滚动所有' + this.wheels + '个轮子')
  }
})

Car1.drive()

// 3.寄生继承
function Vehicle3 () {
  this.engines = 1
}

Vehicle3.prototype.ignition = function () {
  console.log('开启引擎')
}
Vehicle3.prototype.drive = function () {
  this.ignition()
  console.log('滚轮前进')
}

function Car3 () {
  const car = new Vehicle3()
  car.wheels = 4

  const vehicleDrive = car.drive
  car.drive = function () {
    vehicleDrive.call(this)
    console.log('滚动所有' + this.wheels + '个轮子')
  }
  return car
}

new Car3().drive()
