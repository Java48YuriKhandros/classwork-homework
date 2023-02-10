const willWeGetAnswer = function (question) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const isEddAngry = Math.random() > 0.5;
            if (isEddAngry) {
                const ignore = new Error(';)');
                reject(ignore);
            } else {
                const answer = {
                    code: 'I am happy',
                    smile: ':)'
                }
                resolve(answer)
            }
        }, 1)
    })
}

willWeGetAnswer('What?')
    .then(result => result.code)
    .then(code => {
        console.log(code);
        return willWeGetAnswer('Why');
    })
    .then(result => result.code)
    .then(code => {
        console.log(code);
        return willWeGetAnswer('Where');
    })
    .then(result => result.code)
    .then(code => console.log(code))
    .catch(err => console.log(err.message))