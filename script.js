// * — умножение
// / — деление
// % — остаток от деления
// ** — возведение в степень


// create function
const amount = 0
function getTipsRating(amount) {
    if (amount === 0) {
        console.log('+')
        return 'tterrible';
    }
}

function getLargestExpressionResult(a, b) {
    let plus = a + b;
    let minus = a - b;
    let mnozh = a * b;
    let dil = a / b;
    if (plus > minus && plus > mnozh && plus > dil) {
        return plus
    }
    if (minus > plus && minus > mnozh && minus > dil) {
        return minus
    }
    if (mnozh > plus && mnozh > minus && mnozh > dil) {
        return mnozh
    }
    if (dil > plus && dil > minus && mnozh > dil) {
        return dil
    }
}