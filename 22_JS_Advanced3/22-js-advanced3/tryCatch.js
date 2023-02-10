let person = {
    name: 'Peter'
}
//person = null;

printName(person);
console.log('==============================');
try {
    let res = solution(0, 10);
    console.log(res);
} catch (e) {
    console.log(e.name);
    console.log(e.message);
//    console.log(e);
}


function solution(a, b) {
    if (a !== 0) {
        return b / a;
    }
    if (b === 0) {
        throw new Error('solution any number');
    }
    throw {message: 'no solution', name: 'object'};

}

function printName(obj) {
    try {
        console.log(obj.name);
        return;
    } catch (err) {
        console.log(err.name);
        console.log(err.message);
        console.log('Error');
    } finally {
        console.log('finally in printName');
    }


}