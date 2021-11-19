// 字符串,数字之间额强制类型转换
String(24)
Number('3.14')

Number(24).toString();
+'3.14'

5 + +'3.14'

1 + -+ + +-+1;

// 1.日期显示转换为数字
+new Date()
new Date().getTime()
(new Date()).getTime()
Date.now()
if (!Date.now) {
  Date.now = function () {
    return +new Date()
  }
}

// 2.奇特的~运算符
// todo 没有看完
