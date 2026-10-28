export function rangeSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
export function iterationCount(a) {
    let count = 0;
    let current = a;
    while (current > 0.1) {
        current = current / 2;
        count++;
    }
    return count;
}
export function symbolsReplace(message) {
    const chars = message.split('');
    let i = 0;
    if (chars.length > 0) {
        do {
            if (i % 3 === 2) {
                chars[i] = '_';
            }
            i++;
        } while (i < chars.length);
    }
    return chars.join('');
}
