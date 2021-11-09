let strPrimitive = "I am a string";
console.log(strPrimitive);
console.log(typeof strPrimitive); // "string"
console.log(strPrimitive instanceof String); // false
let strObject = new String("I am a string");
console.log(strObject);
console.log(typeof strObject); // "object"
console.log(strObject instanceof String); // true
console.log(Object.prototype.toString.call(strObject)); // [object String]
strPrimitive = "I am a string";
console.log(strPrimitive.length); // 13
console.log(strPrimitive.charAt(3)); // "m"