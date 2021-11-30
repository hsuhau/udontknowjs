// 一般来说,运算符的关联(associativity)不是从左到右就是从右到左,这取决于组合(grouping)是从左开始还是从右开始
// const a = foo() && bar()
// JavaScript默认执行顺序
true ? false : true ? true : true;
true ? false : (true ? true : true);
(true ? false : true) ? true : false;



