/*
https://www.hackerrank.com/challenges/counting-valleys/problem
*/

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let upCount = 0;
    let downCount = 0;
    let overallCount = 0;
    let valleyStart = false;
    let valleyCount = 0;
    let i = 0;
    while (i < path.length) {
        if (path.charAt(i) == "U") {
            upCount++;
        } else if (path.charAt(i) == "D") {
            downCount--;
        }
        overallCount = upCount + downCount;
        if (overallCount < 0 && !valleyStart) {
            valleyStart = true;
            i++;
        } else if (overallCount == 0 && valleyStart) {
            valleyStart = false;
            valleyCount++;
            i++;
        } else {
            i++;
        }
    }
    return valleyCount;
}