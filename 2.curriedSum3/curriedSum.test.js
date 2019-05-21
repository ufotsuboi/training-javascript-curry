const curriedSum = require('./curriedSum');

describe('引数が3つのcurriedSum', () => {
  it('case 1', () => {
    expect(curriedSum(14)(74)(76)).toBe(164);
  });

  it('case 2', () => {
    expect(curriedSum(30)(76, 46)).toBe(152);
  });

  it('case 3', () => {
    expect(curriedSum(55, 20)(90)).toBe(165);
  });

  it('case 4', () => {
    expect(curriedSum(81, 85, 10)).toBe(176);
  });

  it('case 5', () => {
    expect(curriedSum(48, 75, 71, 10)).toBe(194);
  });
});
