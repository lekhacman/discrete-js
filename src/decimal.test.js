const sum = require('./decimal');

describe('Decimal', function () {
  const cases = [
    { input: [0.1, 0.2], want: 0.3 },
    { input: [0.1, 0.05], want: 0.15 },
    { input: [4, 0.1, 0.05], want: 4.15 },
    { input: [0.1, 0.2, 0.3, 0.04], want: 0.64 },
    { input: [0.1, 0.2, 0.3, 0.6], want: 1.2 },
    { input: [0.1, 0.02, 0.003, 0.0004, 0.00009], want: 0.12349 },
  ];

  cases.forEach(function (c, no) {
    it(`Scenario #${no}`, function () {
      expect(sum(c.input)).toEqual(c.want);
    });
  });
});
