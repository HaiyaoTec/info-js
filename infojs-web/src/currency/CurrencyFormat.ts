namespace Currency {
    export interface CurrencyRes {
        unit: string
        val: string
        toFormat(): string
    }
    export interface CurrencyData{
        unit: string,
        decimal:number,
        interceptor(before:CurrencyRes,after:CurrencyRes):void
    }
   export interface CurrencyFormat {
        toCurrency(): CurrencyRes
        toCurrencyFormat(): string
    }
}