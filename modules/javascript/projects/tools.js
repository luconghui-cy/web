var Tools = {

    // 获取元素
    $Id:function (id) {
      return document.getElementById(id);
    },

    // 生成随机整数 在 min 和 max 之间 包括 min max
    getRadom: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1));
    },

    // 获取页面滚动距离的浏览器兼容问题 scrollLeft scrollTop
    // 获取页面滚动出去的距离
    getScroll:function () {
        var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        return {
            scrollLeft : scrollLeft,
            scrollTop : scrollTop
        };
    },

    // 获取鼠标在页面的位置 处理浏览器兼容性问题 pageX pageY
    getPage:function (e) {
        var pageX = e.pageX || e.clientX + getScroll().scrollLeft;
        var pageY = e.pageY || e.clientY + getScroll().scrollTop;
        return {
            pageX : pageX,
            pageY : pageY
        }
    }

}