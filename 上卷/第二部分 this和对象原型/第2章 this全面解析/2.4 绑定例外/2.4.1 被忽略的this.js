function foo () {
  console.log(this.a)
}

const a = 2

foo.call(null)
