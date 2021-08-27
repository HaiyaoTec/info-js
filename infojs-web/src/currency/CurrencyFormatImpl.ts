namespace Currency {
    class CurrencyFormatImpl implements CurrencyFormat {
        private static readonly data: Map<CurrencyEncryptEnum | CurrencyFiatEnum, CurrencyData>= new Map<CurrencyEncryptEnum | CurrencyFiatEnum, CurrencyData>([
            [CurrencyFiatEnum.FIAT_IDR, {
                unit: 'Rp', decimal: 2, interceptor(before: CurrencyRes, after: CurrencyRes) {
                }
            }]
        ])

        constructor(currency: CurrencyFiatEnum | CurrencyEncryptEnum) {
        }

        toCurrency(): CurrencyRes {
            //TODO...
        }

        toCurrencyFormat(): string {
            return "";
        }


    }
}