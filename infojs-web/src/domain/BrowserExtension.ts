/***
 * 浏览器扩展信息类(Write/Read)
 */
class BrowserExtension {
    //客户端Window对象
    private _window: Window
    //客户端浏览器对象
    private _navigator: Navigator
    //客户端当前浏览器语言
    private _language: string = 'unknown'


    constructor() {
        //初始化window和nacigator对象
        this._window = window
        this._navigator = this._window.navigator
        //初始化客户端信息对象
        this.initBrowserExtension();
    }


    get language(): string {
        return this._language
    }

    set language(value) {
        this._language = value
        this._window.localStorage.setItem('language', value)
    }


    private initBrowserExtension() {

        //@ts-ignore
        this.language = (this._window.localStorage.getItem('language') || this._navigator.language).toLowerCase()


    }
}


export {BrowserExtension}

