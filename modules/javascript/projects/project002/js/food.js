// 食物的构造函数
function Food(map,options) {
    options = options || {};
    this.position = 'absolute'; //绝对定位
    this.x = options.x || 0;    //坐标x
    this.y = options.y || 0;    //坐标y
    this.width = options.width || 20;   //宽度
    this.height = options.height || 20; //高度
    this.color = options.color || 'yellow';  //颜色
    this.div = document.createElement('div');
    map.appendChild(this.div);
}

// Food 原型方法 渲染食物
Food.prototype.rander = function () {
    var div = this.div;
    // 随机生成坐标
    this.x =  Tools.getRadom(0, map.clientWidth / this.width - 1) * this.width;
    this.y =  Tools.getRadom(0, map.clientHeight / this.height - 1) * this.height;
    // 设置div的样式
    div.style.position = this.position;
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.color;
}

// 清除食物
Food.prototype.clear = function () {
    //清除div
    var map = this.div.parentNode;
    map.removeChild(this.div);
}

// 测试Food.js
var map = Tools.$Id('map');
var food = new Food(map);
food.rander();
document.onclick = function () {
    food.clear();
}


