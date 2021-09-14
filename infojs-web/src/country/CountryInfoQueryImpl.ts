import {CountryInfo} from "./entity/CountryInfo";
import {CountryEnum} from "./enum/CountryEnum";
import {CountryInfoQuery} from "./CountryInfoQuery";
import {CurrencyFiatEnum} from "./enum/CurrencyFiatEnum";

class CountryInfoQueryImpl implements CountryInfoQuery {
    private static data: Array<CountryInfo>;

    constructor() {
        CountryInfoQueryImpl.data = [
            {
                _name: 'Indonesia',
                _currency: [CurrencyFiatEnum.FIAT_IDR],
                _languages: ['Indonesia'],
                _simple: CountryEnum.ID,
                _areaCode: '+62',
                _numberRegular: /^\d{3,18}$/
            }
            //TODO ...
        ]
    }

    getCountryInfoBySimple(simple: CountryEnum): CountryInfo {
        return CountryInfoQueryImpl.data.filter((item: CountryInfo) => {
            return item._simple === simple
        })?.[0];
    };

    getCountryInfoByCurrency(currency: CurrencyFiatEnum): Array<CountryInfo> {
        return CountryInfoQueryImpl.data.filter((item: CountryInfo) => {
            return item._currency.indexOf(currency)
        });
    };

    getCountryInfoAll(): Array<CountryInfo> {
        return CountryInfoQueryImpl.data;
    }
}
export {CountryInfoQueryImpl}