    import {CountryInfo} from "./entity/CountryInfo";
    import {CountryEnum} from "./enum/CountryEnum";
    import {CurrencyFiatEnum} from "./enum/CurrencyFiatEnum";

    export interface CountryInfoQuery{
        getCountryInfoBySimple(simple:CountryEnum):CountryInfo
        getCountryInfoByCurrency(currency:CurrencyFiatEnum):Array<CountryInfo>
        getCountryInfoAll():Array<CountryInfo>
    }
