const obj = require('./fetch');

describe('Data fetching', function () {
  it('should update state', function () {
    expect(obj.state.value).toEqual(null);

    obj.run();

    // TODO: fix this unit test
    expect(obj.state.value).toEqual('Hooray');
  });
});
