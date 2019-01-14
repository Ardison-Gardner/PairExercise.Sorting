function split(wholeArray) {
  let mid = Math.floor(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, mid);
  let secondHalf = wholeArray.slice(mid);
  return [firstHalf, secondHalf];
}
function merge(array1, array2) {
  let a1Index = 0;
  let a2Index = 0;
  let newArr = [];
  while (a1Index < array1.length && a2Index < array2.length) {
    if (array2[a2Index] < array1[a1Index]) {
      newArr.push(array2[a2Index]);
      a2Index++;
    } else {
      newArr.push(array1[a1Index]);
      a1Index++;
    }
  }
  if (a1Index >= array1.length) {
    newArr.push(...array2.slice(a2Index));
  } else if (a2Index >= array2.length) {
    newArr.push(...array1.slice(a1Index));
  }
  return newArr;
}
function mergeSort(array) {
  if (array.length > 1) {
    const [firstHalf, secondHalf] = split(array);
    const firstHalfSorted = mergeSort(firstHalf);
    const secondHalfSorted = mergeSort(secondHalf);
    return merge(firstHalfSorted, secondHalfSorted);
  }
  return array;
}
