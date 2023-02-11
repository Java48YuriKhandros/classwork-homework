const base_url = 'http://data.fixer.io/api/latest';
const API_KEY = 'ca76ddbaa37709a2734c45abe0f1ae0b';

fetch(`${base_url}?access_key=${API_KEY}`)
    .then(response => response.json())
    .then(({ rates }) => {
        const currencies = Object.keys(rates);
        currencies.forEach(item => {
            const option = document.createElement('option');
            option.text = item;
            option.value = item;
            to.appendChild(option);
            // from.appendChild(option); wrong way
            from.appendChild(new Option(item, item));
        });
        calculate.onclick = function () {
            const currencyFrom = from.value.trim().toUpperCase();
            const currencyTo = to.value.trim().toUpperCase();
            const res = rates[currencyTo] / rates[currencyFrom] * sum.value;
            if (isNaN(res)) {
                throw new Error('wrong data');
            }
            const resElem = document.createElement('h1');
            const resText = document.createTextNode(`Result: ${res.toFixed(2)}`);
            resElem.appendChild(resText);
            if (result.firstElementChild) {
                result.replaceChild(resElem, result.firstElementChild);
            } else {
                result.appendChild(resElem);
            }
        }
    })
    .catch(e => {
        console.log(e);
        const resElem = document.createElement('h1');
        const resText = document.createTextNode(`Error`);
        resElem.appendChild(resText);
        if (result.firstElementChild) {
            result.replaceChild(resElem, result.firstElementChild);
        } else {
            result.appendChild(resElem);
        }
    })

