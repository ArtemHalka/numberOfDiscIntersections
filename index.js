function solution(array) {
    const leftBoundaries = [];
    const rightBoundaries = [];
    array.forEach((radius, center) => {
        leftBoundaries.push(center - radius);
        rightBoundaries.push(center + radius);
    });

    leftBoundaries.sort((a, b) => a - b);
    rightBoundaries.sort((a, b) => a - b);

    let j = 0,
    counter = 0;

    for (let i = 0; i < rightBoundaries.length; i++) {
        while (j < array.length && rightBoundaries[i] >= leftBoundaries[j]) {
            counter += j - i;
            j++;
        }
        if (counter > 10000000) return -1;
    }

    return counter;
}

const arr = [1, 5, 2, 1, 4, 0];
console.log(solution(arr));
