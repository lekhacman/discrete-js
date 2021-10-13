const reverse = require('./reverseArray');

describe('Reverse array', function () {
  const cases = [
    {
      input: ['h', 'e', 'l', 'l', 0, 'r', 'l', 'd'],
      want: ['d', 'l', 'r', 0, 'l', 'l', 'e', 'h'],
    },
    {
      input: ['h', 'e', 'l', 'l', 0, 'r', 'l', 'd', '!'],
      want: ['!', 'd', 'l', 'r', 0, 'l', 'l', 'e', 'h'],
    },
  ];

  cases.forEach(function (c, no) {
    it(`Scenario #${no}`, function () {
      expect(reverse(c.input)).toEqual(c.want);
    });
  });
});
