swapFunc = (arr, idx, nextIdx) => {
  let greater = arr[idx];
  let lesser = arr[nextIdx];
  arr[idx] = lesser;
  arr[nextIdx] = greater;
};

bubbleSort = (arr) => {
  let swap = true;
  counter = 0;
  while (swap) {
    swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swapFunc(arr, i, i + 1);
        swap = true;
        counter++;
      }
    }
  }
  return arr;
};

bubbleSort([5, 4, 2, 8, 7, 6, 1, 3]);
