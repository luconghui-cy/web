//程序入口 js

var parent = document.getElementById('container');
//box数组
var boxArr = [];

// 创建10个box
for (var i = 0; i < 10; i++) {
    var r = Tools.getRadom(0, 255);
    var g = Tools.getRadom(0, 255);
    var b = Tools.getRadom(0, 255);
    var box = new Box(parent, {
        backgroundColor:'rgb('+ r + ',' + g + ',' + b +')'
    });
    boxArr.push(box);
}

//随机生成位置
RandomBox();

//设置随机位置 开启定时器
setInterval(RandomBox, 500);

//随机生成位置
function RandomBox() {
    for (var i = 0; i < boxArr.length; i++) {
        var box = boxArr[i];
        box.random();
    }
}