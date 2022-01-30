import {CountryInfoQueryImpl as CountryInfo} from './country'
import {BrowserInfo, BrowserExtension} from './domain'

declare global {
    interface Window {
        browserInfo: BrowserInfo
        browserExtension: BrowserExtension
        getBrowserInfo:()=>Promise<BrowserInfo>
    }
}
let browserInfo: BrowserInfo | undefined=undefined

const receivers:Array< [(value: (BrowserInfo | PromiseLike<BrowserInfo>)) => void,(reason:any)=>void]>= []

function BrowserInfoInitializer(){
    let info=new BrowserInfo()
    info.initClientInfo()
      .then(()=>{
            browserInfo = info
            for(let [resolve,reject] of receivers){
                resolve(browserInfo)
            }
        }
      )
      .catch(()=>{
          for(let [resolve,reject] of receivers){
              reject('initError')
          }
      })
}
BrowserInfoInitializer()

window.browserInfo = new BrowserInfo()

window.browserExtension = new BrowserExtension()

window.getBrowserInfo=function ():Promise<BrowserInfo>{
    return new Promise<BrowserInfo>((resolve, reject) => {
        if(!browserInfo){
            receivers.push([resolve,reject])
        }else{
            //有值
            resolve(browserInfo)
        }
    })
}

export {CountryInfo}
