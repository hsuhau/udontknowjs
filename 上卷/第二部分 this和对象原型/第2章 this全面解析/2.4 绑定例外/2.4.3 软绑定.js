/**
 * 软绑定
 * @param obj
 */
if (!Function.prototype.softBind()) {
  Function.prototype.softBind = function (obj) {
    const fn = this
    const curried = [].slice.call(arguments, 1)
    const bound = function () {
      return fn.apply(!this || this === (window || global)) ? obj : this, curried.concat.apply(curried, arguments)
    }
    bound.prototype = Object.create(fn.prototype)
    return bound
  }
}

function foo () {
  console.log('name: ' + this.name)
}

const obj1 = { name: 'obj1' }
const obj2 = { name: 'obj2' }
const obj3 = { name: 'obj3' }

const fooOBJ = foo.softBind(obj1)
fooOBJ() // name: obj1

obj2.foo = foo.softBind(obj2)
obj2.foo() // name: obj2

fooOBJ.call(obj3)

setTimeout(obj2.foo, 10)
// name: obj <----应用了软绑定

// 可以看到软绑定版本的foo()可以手动将this绑定到obj2或者obj3上,但如果应用默认绑定,则会将this绑定到obj1
