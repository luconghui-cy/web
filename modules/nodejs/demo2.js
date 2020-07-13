/**
 * Buffer
 * 功能 处理二进制数据
 * Buffer 本质就是一个字节数组
 * 
 * 1 构造函数
 * new Buffer() ---> 已经弃用了
 * 
 * 2 静态方法 
 * Buffer.alloc(size)
 * Buffer.from(字符串,[编码]) 默认utf-8
 * Buffer.from(字节数组)
 * 
 * Buffer.isEnconding() 判断是否支持该编码 utf8 ascii utf16le base64 latin1 hex ...
 * Buffer.isBuffer() 判断是否为Buffer
 * Buffer.byteLength() 返回指定编码的长度 默认utf-8
 * Buffer.concat() 将一组Buffer对象合并一个Buffer
 * 
 * 3 实例方法 
 * 
 */

//  let buf = Buffer.alloc(5);
//  let buf = Buffer.from('Hello World!');
//  let buf = Buffer.from([0x68, 0x67, 0x65, 0x64, 0x63]);
//  console.log(buf);
//  console.log(buf.toString());

//--------------------------------------------------

console.log(Buffer.isEncoding('utf8')); //true
console.log(Buffer.isEncoding('gbk'));  //false
let buf = Buffer.from('Hello');
console.log(Buffer.isBuffer(buf));  //true 
console.log(Buffer.isBuffer({}));  //false
let buf1 = Buffer.from('中国');
console.log(Buffer.byteLength(buf));  //5
console.log(Buffer.byteLength(buf1)); //6 utf8编码中一个汉字占3个字节。


