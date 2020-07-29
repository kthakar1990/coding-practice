/*
Given two arrays A and B of length N, determine if there is a way to make A equal to B by reversing any subarrays from array B any number of times.
Signature
bool areTheyEqual(int[] arr_a, int[] arr_b)
Input
All integers in array are in the range [0, 1,000,000,000].
Output
Return true if B can be made equal to A, return false otherwise.
Example
A = [1, 2, 3, 4]
B = [1, 4, 3, 2]
output = true
After reversing the subarray of B from indices 1 to 3, array B will equal array A.
*/

function areTheyEqual(array_a, array_b) {
    // Write your code here
    let mapA = new Map();
    for (let i = 0; i < array_a.length; i++) {
        if (!mapA.has(array_a[i])) {
            mapA.set(array_a[i], 0);
        }
        mapA.set(array_a[i], mapA.get(array_a[i]) + 1);
    }

    let output = true;
    for (let i = 0; i < array_b.length; i++) {
        if (!mapA.has(array_b[i])) {
            output = false;
        } else {
            mapA.set(array_b[i], mapA.get(array_b[i]) - 1);
            if (mapA.get(array_b[i]) === 0) {
                mapA.delete(array_b[i]);
            }
        }
    }

    if (mapA.size !== 0) {
        output = false;
    }

    return output ? true : false;
}

console.log(areTheyEqual([1, 2, 3], [2, 3, 4]));