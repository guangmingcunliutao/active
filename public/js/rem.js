/* 

// 解决横竖屏转换BUG
<style id="rootFontSize">html{font-size: 100px !important;}</style>

<meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">

*/

// designWidth:设计稿的实际宽度值，需要根据实际设置
// maxWidth:制作稿的最大宽度值，需要根据实际设置
// 这段js的最后面有两个参数记得要设置，一个为设计稿实际宽度，一个为制作稿最大宽度，例如设计稿为750，最大宽度为750，则为(750,750)
// 假如你有一个块是.box{width:120px;height:80px;} 转为rem则为.box{width:1.2rem; height:.8rem;}
/* (function (designWidth, maxWidth) {
    var doc = document,
        win = window,
        docEl = doc.documentElement,
        remStyle = document.createElement("style"),
        tid;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        maxWidth = maxWidth || 540;
        width > maxWidth && (width = maxWidth);
        var rem = width * 100 / designWidth;
        remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
    }

    if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(remStyle);
    } else {
        var wrap = doc.createElement("div");
        wrap.appendChild(remStyle);
        doc.write(wrap.innerHTML);
        wrap = null;
    }
    //要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
    refreshRem();

    win.addEventListener("resize", function () {
        clearTimeout(tid); //防止执行两次
        tid = setTimeout(refreshRem, 300);
    }, false);

    win.addEventListener("pageshow", function (e) {
        if (e.persisted) { // 浏览器后退的时候重新计算
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === "complete") {
        doc.body.style.fontSize = "16px";
    } else {
        doc.addEventListener("DOMContentLoaded", function (e) {
            doc.body.style.fontSize = "16px";
        }, false);
    }
})(750, 750); */


/* (function () {
    var doc = document,
        win = window;

    // html元素字体
    // 这里基础字体设置为10在uc, WX上没效果,  不知道为什么
    // 设置为10时, dpr=1的手机, 宽度360, 计算出来html的字体大小为5px, 可能是字体太小了
    // 尽量设置大一些, 这样避免12px字体大小的限制
    var _rootFontSize = window._rootFontSize || 100;

    // 默认不支持缩放
    var _remMetaScalable = typeof window._remMetaScalable === 'undefined' ?
        false :
        !!window._remMetaScalable;

    var docEl = doc.documentElement,
        isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),

        // 只针对IOS设备
        dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,

        // 计算缩放比
        scale = 1 / dpr,

        // 检测支持的"缩放"事件
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    docEl.dataset.dpr = dpr;

    // 被iframe引用时，禁止缩放
    dpr = window.top === window.self ? dpr : 1;

    var metaEl = doc.createElement('meta');
    metaEl.name = 'viewport';
    var metaElContent = 'width=device-width, ';

    // 支持缩放
    if (_remMetaScalable) {
        metaElContent += 'initial-scale=' + scale;
    } else {
        metaElContent += (
            'initial-scale=' + scale +
            ',maximum-scale=' + scale +
            ', minimum-scale=' + scale +
            ', user-scalable=no');
    }
    metaEl.content = metaElContent;
    docEl.firstElementChild.appendChild(metaEl);

    // 缩放/旋转设备检测函数
    var recalc = function () {
        var width = docEl.clientWidth;

        // 750为设计用的宽度, 比如它以iphone6标准(宽750)
        // 此时, 按照设计稿的尺寸写就可以了
        // 如: 设计稿为100px, 那么就写4rem(100 / 25), 25是自己设置的
        // 也可以设置成100, 这样就写100px就写1rem
        docEl.style.fontSize = _rootFontSize * (width / 750) + 'px';
    };
    recalc();

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
})(); */

var rem = (function () {
    var doc = document,
        win = window,
        // html元素字体
        // 这里基础字体设置为10在uc, WX上没效果,  不知道为什么
        // 设置为10时, dpr=1的手机, 宽度360, 计算出来html的字体大小为5px, 可能是字体太小了
        // 尽量设置大一些, 这样避免12px字体大小的限制
        _rootFontSize = win._rootFontSize || 100,

        // 默认不支持缩放
        _remMetaScalable = typeof win._remMetaScalable === 'undefined' ? false : !!win._remMetaScalable,

        docEl = doc.documentElement,

        isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),

        // 只针对IOS设备
        dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,

        // 计算缩放比
        scale = 1 / dpr,

        // 检测支持的"缩放"事件
        resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';

    docEl.dataset.dpr = dpr;

    // 被iframe引用时，禁止缩放
    dpr = win.top === win.self ? dpr : 1;

    var metaEl = doc.createElement('meta');
    metaEl.name = 'viewport';
    var metaElContent = 'width=device-width, ';

    // 支持缩放
    if (_remMetaScalable) {
        metaElContent += 'initial-scale=' + scale;
    } else {
        metaElContent += (
            'initial-scale=' + scale +
            ',maximum-scale=' + scale +
            ', minimum-scale=' + scale +
            ', user-scalable=no');
    }
    metaEl.content = metaElContent;
    docEl.firstElementChild.appendChild(metaEl);

    return {
        init: function () {
            this.event();
            this.recalc();
        },
        event: function () {
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, this.recalc, false);
        },
        recalc: function () {
            var width = docEl.clientWidth;
            // 750为设计用的宽度, 比如它以iphone6标准(宽750)
            // 此时, 按照设计稿的尺寸写就可以了
            // 如: 设计稿为100px, 那么就写4rem(100 / 25), 25是自己设置的
            // 也可以设置成100, 这样就写100px就写1rem
            docEl.style.fontSize = _rootFontSize * (width / 750) + 'px';
        }
    }
})();
rem.init();