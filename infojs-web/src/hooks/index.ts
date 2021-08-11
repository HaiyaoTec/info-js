/**
 *  获取客户端浏览器厂商
 * @param window 客户端window对象
 */
function getExplorer(window: Window): string {
    const explorer = window.navigator.userAgent;
    //ie
    if (explorer.indexOf("MSIE") >= 0) {
        return 'ie';
    }
    //firefox
    else if (explorer.indexOf("Firefox") >= 0) {
        return 'Firefox';
    }
    //Chrome
    else if (explorer.indexOf("Chrome") >= 0) {
        return 'Chrome';
    }
    //Opera
    else if (explorer.indexOf("Opera") >= 0) {
        return 'Opera';
    }
    //Safari
    else if (explorer.indexOf("Safari") >= 0) {
        return 'Safari';
    }
    return 'unknown'
}

/***
 *  获取客户端分辨率
 * @param window 客户端window对象
 */
function getScreenResolution(window: Window) {
    return window.screen.width + "*" + window.screen.height;
}

/***
 * 客户端是否为移动设备
 * @param window
 */
function isMobileDevice(window: Window) {
    if (window.navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
        return true
    } else {
        return false
    }
}

export {getExplorer, getScreenResolution, isMobileDevice}
