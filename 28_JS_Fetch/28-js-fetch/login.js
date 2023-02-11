const base_url = 'https://webaccounting.herokuapp.com';
signin.onclick = () => {
    const token = btoa(`${login.value}:${password.value}`);
    fetch(`${base_url}/account/login`, {
        method: 'Post',
        headers: {
            Authorization: `Basic ${token}`
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status)
            }
        })
        .then(data => console.log(data))
        .catch(e => console.log(e.message));
}