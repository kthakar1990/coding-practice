function countSubarrays(arr) {
    // following is O(n^2) solution:
    let count = 0;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        count++;
        let j = i - 1;
        while (j >= 0 && arr[j] < arr[i]) {
            count++;
            j--;
        }
        let k = i + 1;
        while (k < arr.length && arr[i] > arr[k]) {
            count++;
            k++;
        }
        result.push(count);
        count = 0;
    }
    return result;
}

//console.log(countSubarrays([3, 4, 1, 6, 2]));