
// parent  父容器
// options 选项
function Box (parent, options) {
    this.parent = parent;
    options = options || {};
    this.backgroundColor = options.backgroundColor || 'red';
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.div = document.createElement('div');
    parent.appendChild(this.div);
    //设置样式
    this.init();
}

// 设置样式
Box.prototype.init = function () {
    var div = this.div;
    div.style.backgroundColor = this.backgroundColor;
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    //脱离文档流
    div.style.position = 'absolute';
}


// 随机生成box的位置
Box.prototype.random = function () {
    var x = Tools.getRadom(0, this.parent.clientWidth / this.width - 1) * this.width;
    var y = Tools.getRadom(0, this.parent.clientHeight / this.height - 1) * this.height;
    this.div.style.left = x + 'px';
    this.div.style.top = y + 'px';
}
