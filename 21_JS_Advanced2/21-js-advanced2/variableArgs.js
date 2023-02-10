const sum = (a, b, ...rest) => {
    //console.log(arguments);
    let res = a + b;
    for (let i = 0; i < rest.length; i++) {
        res += rest[i];
    }
    return res;
}
const res = sum(3, 5, 7, 9);
console.log(res);