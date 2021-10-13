const transform = require('./transform');

describe('Functional light', function () {
  it('should transform', function () {
    expect(
      transform([
        { planet: 'Earth', noOfPeopleMoveIn: 1, gender: 'M' },
        { planet: 'Earth', noOfPeopleMoveIn: 1, gender: 'F' },
        { planet: 'Mars', noOfPeopleMoveIn: 2, gender: 'M' },
        { planet: 'Earth', noOfPeopleMoveIn: 1, gender: 'F' },
        { planet: 'Mars', noOfPeopleMoveIn: 2, gender: 'F' },
        { planet: 'Mars', noOfPeopleMoveIn: 1, gender: 'F' },
        { planet: 'Saturn', noOfPeopleMoveIn: 3, gender: 'M' },
        { planet: 'Saturn', noOfPeopleMoveIn: 4, gender: 'F' },
      ])
    ).toEqual(['Earth: 1 + 2 = 3', 'Mars: 2 + 3 = 5', 'Saturn: 3 + 4 = 7']);
  });
});
