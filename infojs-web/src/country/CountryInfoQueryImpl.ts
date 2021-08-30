namespace Country {
    import CurrencyFiatEnum = Country.CurrencyFiatEnum;
    export class CountryInfoQueryImpl implements CountryInfoQuery {
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
        getCountryInfoBySimple(simple: Country.CountryEnum): CountryInfo {
            return CountryInfoQueryImpl.data.filter((item: CountryInfo) => {
                return item._simple === simple
            })?.[0];
        };

        getCountryInfoByCurrency(currency: Country.CurrencyFiatEnum): Array<CountryInfo> {
            return CountryInfoQueryImpl.data.filter((item: CountryInfo) => {
                return item._currency.indexOf(currency)
            });
        };

        getCountryInfoAll(): Array<Country.CountryInfo> {
            return CountryInfoQueryImpl.data;
        }
    }
}