namespace Country {
    import CurrencyFiatEnum = Currency.CurrencyFiatEnum;

    export class CountryInfoQueryImpl implements CountryInfoQuery {
        private readonly data: Array<CountryInfo>;
        constructor() {
            this.data = [
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
            return this.data.filter((item: CountryInfo) => {
                return item._simple === simple
            })?.[0];
        };

        getCountryInfoByCurrency(currency: Currency.CurrencyFiatEnum): Array<CountryInfo> {
            return this.data.filter((item: CountryInfo) => {
                return item._currency.indexOf(currency)
            });
        };

        getCountryInfoAll(): Array<Country.CountryInfo> {
            return this.data;
        }
    }
}