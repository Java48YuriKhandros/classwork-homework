getPost.onclick = event => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`)
        .then(response => {
            if (response.ok) {
                // console.log(response.status);
                // console.log(response.headers.get('Content-Type'));
                return response.json();
            } else {
                throw new Error(response.status)
            }
        })
        .then(data => {
            const h1 = document.createElement('h1');
            h1.append(`ID: ${data.id}, Title: ${data.title}`)
            document.body.append(h1);
        })
        .catch(e => {
            const h1 = document.createElement('h1');
            h1.append(`O-o-ops 404`)
            document.body.append(h1);
        })
}