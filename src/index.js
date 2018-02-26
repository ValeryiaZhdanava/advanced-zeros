module.exports = function getZerosCount(number, base) {

    let max;
    next: for (let i = 2; i <= base; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                continue next;
            }
        }
        if (base % i === 0) {
            max = i;
        }
    }
    let count = 0;
    while (number > 0) {
        number = Math.floor(number / max);
        count += number;
    }
    return count;
}