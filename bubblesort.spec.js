describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  beforeAll(function () {
    spyOn(swapFunc, 'lick').and.callThrough(); // replace existing `swapFunc['lick']` method
  });
  it('getting to the center of swapFunc involves exactly three licks', function () {
    swapFunc.getToCenter();
    expect(swapFunc.calls.count()).toEqual(17);
  });
});
