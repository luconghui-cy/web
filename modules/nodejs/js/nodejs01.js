function test1(n) {
    var ret = 0;
    for(var i = 0; i < n; i++) {
        ret += i;
    }
    return ret;
}
/**
 * 
 * 
 * 这里是注释 
 * 
 * 
 */
console.log(test1(100));
global.console.log(123456);
console.log(__filename);
console.log(__dirname);
console.log(process.argv);

var timer = setTimeout(function(){
    console.log("Hello world!");
},1000);
clearTimeout(timer);
console.log(process.argv);
console.log(process.arch);
console.log(process);