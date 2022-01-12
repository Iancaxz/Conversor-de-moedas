let button = document.getElementById("button");
let select = document.getElementById("select");

async function convertValue() {

    let currency = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(function(response) {
        return response.json()
    });

    let dolar = currency.USDBRL.high;
    let euro = currency.EURBRL.high;

    let inputRealValue = Number(document.getElementById("input").value);
    let realText = document.getElementById("real-text-value");
    realText.innerHTML = inputRealValue.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    });

    let currencyTextValue = document.getElementById("currency-text-value");
    let result;

    if (select.value === "US$ Dólar Americano") {
        result = inputRealValue / dolar;
        currencyTextValue.innerHTML = result.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    }

    if (select.value === "€ Euro") {
        result = inputRealValue / euro;
        currencyTextValue.innerHTML = result.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR",
        });
    }

}

function changeCurrency() {
    let currencyText = document.getElementById("currency-text")
    let currencyImage = document.getElementById("currency-image")
    console.log(select.value)

    if (select.value === "US$ Dólar Americano") {
        currencyText.innerHTML = "Dólar Americano"
        currencyImage.src = "./img/eua.png"
    }

    if (select.value === "€ Euro") {
        currencyText.innerHTML = "Euro"
        currencyImage.src = "./img/euro.png"
    }

    convertValue()
}

button.addEventListener("click", convertValue);
select.addEventListener("change", changeCurrency);