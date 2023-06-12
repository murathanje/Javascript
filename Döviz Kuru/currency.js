class Currency {
    constructor() {
        this.url = `https://api.freecurrencyapi.com/v1/latest?apikey=bO8vwLbfmSHkv28xcb6ibOAUqNzMUH7wkPEfts1h&base_currency=`
    }

    async exchange(amount, firstCurrency, secondCurrency) {
        const response = await fetch(`${this.url}${firstCurrency}`)
        const result = await response.json();
        const resultInput=  result.data[secondCurrency] * amount;
        return resultInput;
    }
}