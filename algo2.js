function insertionSort(arr) {
   
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }

    return arr;
}


const array = [5, 3, 8, 4, 2];
console.log("Avant le tri par insertion:", array);
insertionSort(array);
console.log("Après le tri par insertion:", array);
