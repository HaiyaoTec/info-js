namespace Country {
    import CurrencyFiatEnum = Country.CurrencyFiatEnum;

    export interface CountryInfoQuery{
        getCountryInfoBySimple(simple:CountryEnum):CountryInfo
        getCountryInfoByCurrency(currency:CurrencyFiatEnum):Array<CountryInfo>
        getCountryInfoAll():Array<CountryInfo>
    }
}
