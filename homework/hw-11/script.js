// // SUMDIGITS/

let res = sumDigits(1234);

function sumDigits(num) {
    let sum = 0, tmp;
    while (num > 0) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        sum = sum + tmp;
    }
    return sum;
}

console.log(`res = ${res}`);

// LUCKYNUMBER

function luckyNumber(num) {
    let x = String(num);
    let even = 0, odd = 0, res = false;

    for (let i = 0; i < x.length; i++) {
        if (i % 2 == 0) {
            even = even + Number(x[i]);
        } else {
            odd = odd + Number(x[i]);
        }
    }
    if (even === odd) {
        res = true;
    }
    console.log(res ? 'lucky' : 'unlucky');
}
luckyNumber(123871);