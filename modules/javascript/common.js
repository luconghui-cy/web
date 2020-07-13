// 获取页面滚动距离的浏览器兼容问题 scrollLeft scrollTop
// 获取页面滚动出去的距离
function getScroll() {
    var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    return {
        scrollLeft : scrollLeft,
        scrollTop : scrollTop
    };
}

//获取鼠标在页面的位置 处理浏览器兼容性问题 pageX pageY
function getPage(e) {
    var pageX = e.pageX || e.clientX + getScroll().scrollLeft;
    var pageY = e.pageY || e.clientY + getScroll().scrollTop;
    return {
        pageX : pageX,
        pageY : pageY
    }
}