const api_key = 'gHBm67EZiz0YuSFtzNLmM3VIUEDa74t6';
const base_url = 'https://api.apilayer.com/fixer';

calculate.onclick = e => {
    fetch(`${base_url}/convert?to=${to.value.trim().toUpperCase()}&from=${from.value.trim().toUpperCase()}&amount=${sum.value}`, {
        headers: {
            apikey: api_key
        }
    })
        .then(response => response.json())
        .then(data => {
            if (!data.success) {
                throw new Error('Wrong data')
            }
            const h1 = document.createElement('h1')
            h1.append(`Result = ${data.result}`);
            if (result.firstElementChild) {
                result.replaceChild(h1, result.firstElementChild)
            } else {
                result.append(h1);
            }
        })
        .catch(e => {
            const h1 = document.createElement('h1')
            h1.append(e.message);
            if (result.firstElementChild) {
                result.replaceChild(h1, result.firstElementChild)
            } else {
                result.append(h1);
            }
        })
}