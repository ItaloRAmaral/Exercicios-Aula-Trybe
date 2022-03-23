const API_URL = 'https://api.coincap.io/v2/assets';
const cryptoContainer = document.querySelector('#container');

const fetchCrypto = async() => {

    const cryptoCoins = await fetch(API_URL)
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => error.toString());
    
    return cryptoCoins
};

const fetchUsdCurrencies = async () => {
    const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
    const usdEndpoint = '/currencies/usd.min.json'
    const url = baseUrl.concat(usdEndpoint);

    const usdCurrencies = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.usd)
        .catch((error) => error.toString(error))

    return usdCurrencies;
}

const setCoins = async () => {
    const cryptoContainer = document.querySelector('#container');
    const usdCurrencies = await fetchUsdCurrencies();
    const coins = await fetchCrypto();

    coins
    .filter((element) => Number(element.rank) <= 10)
    .forEach(element => {
        const newLi = document.createElement('li');
        const usdPrice = Number(element.priceUsd);
        const coinName = element.name;
        const coinSymbol = element.symbol;
        const brlPrice = usdPrice * usdCurrencies.brl;

        newLi.innerText = `${coinName} (${coinSymbol}): R$ ${brlPrice.toFixed(2)}`;
        cryptoContainer.appendChild(newLi);
    });
};

window.onload = () => setCoins ();