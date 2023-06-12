const amountInput = document.querySelector("#amount");
const firstCurrencyInput = document.querySelector("#firstCurrency");
const secondCurrencyInput = document.querySelector("#secondCurrency");
const resultInput = document.querySelector("#result");
const arrow = document.querySelector(".fa-solid");

const currency = new Currency();

runEventListener();

function runEventListener() {
    amountInput.addEventListener("input", exchange);
    arrow.addEventListener("click", changeValue)
}

function exchange() {
    const amountValue = Number(amount.value.trim());
    const firstCurrencyValue = firstCurrencyInput.options[firstCurrencyInput.selectedIndex].textContent;
    const secondCurrencyValue = secondCurrencyInput.options[secondCurrencyInput.selectedIndex].textContent;

    currency.exchange(amountValue, firstCurrencyValue, secondCurrencyValue)
        .then((result) => {
            resultInput.value = result.toFixed(2);
        })
        .catch(err => console.log(err))
}

let degree = 0;
function changeValue() {
    const amountValue = Number(amount.value.trim());
    let holdValue = firstCurrencyInput.value;
    firstCurrencyInput.value = secondCurrencyInput.value;
    secondCurrencyInput.value = holdValue;
    degree += 180;
    arrow.style.transform = `rotate(${degree}deg)`;
    amountInput.value = resultInput.value
    currency.exchange(amountValue, firstCurrencyInput.value, secondCurrencyInput.value)
    .then((result) => {
        resultInput.value = result.toFixed(2);
    })
    .catch(err => console.log(err))


}
