function removeDuplicates(arr) {
    if (arr.length <= 1) return arr;
    let currentIndex = 0;
    arr = arr.sort((a, b) => a - b);
    for (let i = 1; i < arr.length; i++) {
        if (arr[currentIndex] !== arr[i]) {
            currentIndex++;
            arr[currentIndex] = arr[i];
        }
    }
    arr.length = currentIndex + 1;
    return arr;
}
const arr = [6, 8, 5, 1, 10, 20, 4, 2, 3, 5, 9, 6, 2, 7, 1];
console.log(removeDuplicates(arr));

[1,5,7,3]
[3,7,5,1]