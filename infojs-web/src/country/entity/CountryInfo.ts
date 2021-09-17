import {CountryEnum} from "../enum/CountryEnum";
import {CurrencyFiatEnum} from "../enum/CurrencyFiatEnum";

export interface CountryInfo {
    //国家名字:China、Spain
    _name: string
    //国家简称
    _simple: CountryEnum
    //语言可以拓展
    _languages: Array<'en_US' | 'Indonesia' | 'es_MX'>  //TODO...
    //区号 +1
    _areaCode: string
    //支持的货币
    _currency: Array<CurrencyFiatEnum>
    //电话号码正则
    _numberRegular: RegExp
}
