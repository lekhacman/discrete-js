const obj = require('./whatIsThis');

describe('This is JavaScript', function () {
  it('should print JavaScript', function () {
    expect(obj.fn()).toEqual('JS');

    // TODO: do something here to make fn returns 'JavaScript'
    expect(obj.fn()).toEqual('JavaScript');
  });
});
