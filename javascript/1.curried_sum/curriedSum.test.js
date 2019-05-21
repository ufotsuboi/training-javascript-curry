const curriedSum = require('./curriedSum');

describe('curriedSum', () => {
  it('case 1', () => {
    expect(curriedSum(14)(74)(76)(92)).toBe(256);
  });

  it('case 2', () => {
    expect(curriedSum(30)(76, 46)(49)).toBe(201);
  });

  it('case 3', () => {
    expect(curriedSum(87)(55, 20, 90)).toBe(252);
  });

  it('case 4', () => {
    expect(curriedSum(81, 85)(10)(45)).toBe(221);
  });

  it('case 5', () => {
    expect(curriedSum(48, 75)(71, 10)).toBe(204);
  });

  it('case 6', () => {
    expect(curriedSum(68, 24, 88)(92)).toBe(272);
  });

  it('case 7', () => {
    expect(curriedSum(60, 55, 69, 74)).toBe(258);
  });
});
