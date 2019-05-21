const curriedSum = require('./curriedSum');

describe('引数が2つのcurriedSum', () => {
  it('case 1', () => {
    expect(curriedSum(14)(74)).toBe(88);
  });

  it('case 2', () => {
    expect(curriedSum(30, 49)).toBe(79);
  });

  it('case 3', () => {
    expect(curriedSum(55, 20, 90)).toBe(75);
  });
});
