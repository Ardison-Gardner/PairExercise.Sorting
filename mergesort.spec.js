describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([0, 5, 1])).toEqual([[0], [5, 1]]);
  });
});
describe('Merge Array function', function() {
  it('is able to marge two sorted halves', function() {
    expect(merge([0], [5, 1])).toEqual([0, 5, 1]);
  });
});
describe('MergeSort Array function', function() {
  it('is able to marge two sorted halves', function() {
    expect(mergeSort([0, 5, 1])).toEqual([0, 1, 5]);
  });
});
