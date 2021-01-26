/*
https://www.hackerrank.com/challenges/sock-merchant/problem
*/


// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let map = new Map();
    let pairCount = 0;
    for (let i = 0; i < ar.length; i++) {
        if (!map.has(ar[i])) {
            map.set(ar[i], 0);
        }
        map.set(ar[i], map.get(ar[i]) + 1)
    }

    for (const [key, value] of map.entries()) {
        let res = checkIfPair(value);
        pairCount += res;
    }
    return pairCount;
}

function checkIfPair(val) {
    let newVal = 0;
    if (val >= 2) {
        let output = val % 2;
        if (output != 0) {
            newVal = (val - 1) / 2;
        } else {
            newVal = val / 2;
        }
        return newVal
    } else {
        return 0;
    }
}