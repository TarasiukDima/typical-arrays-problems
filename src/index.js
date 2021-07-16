
exports.min = function min(array) {
    if (  array === undefined || !array.length ) return 0;

    let minNumber = array[0];
    array.forEach(element => {
        if (element < minNumber) {
            minNumber = element;
        }
    });
    return minNumber;
}

exports.max = function max(array) {
    if (  array === undefined || !array.length ) return 0;

    let maxNumber = array[0];
    array.forEach(element => {
        if (element > maxNumber) {
            maxNumber = element;
        }
    });
    return maxNumber;
}

exports.avg = function avg(array) {
    if (  array === undefined || !array.length ) return 0;

    let totalSumm = array.reduce( (total,element) => {
        return total + element;
    }, 0);
    return totalSumm / array.length;
}
