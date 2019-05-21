const curry = require('./curry');

describe('curry', () => {
  const sum = (a, b, c, d) => a + b + c + d;
  const curriedSum = curry(sum);

  it('case 1', () => {
    const sum = (a, b, c, d) => a + b + c + d;
    const curriedSum = curry(sum);
    expect(curriedSum(1, 64)(30, 52)).toBe(147);
  });

  it('case 4', () => {
    const sum = (a, b, c, d, e) => a + b + c + d + e;
    const curriedSum = curry(sum);
    expect(curriedSum(87)(55, 20, 90)(92)).toBe(344);
  });

  it('case 3', () => {
    const sum = (a, b) => a + b;
    const curriedSum = curry(sum);
    expect(curriedSum(76, 46)).toBe(122);
  });

  it('case 4', () => {
    const sum = a => a;
    const curriedSum = curry(sum);
    expect(curriedSum(45)).toBe(45);
  });

  it('case 5', () => {
    const sum = (a, b, c, d, e, f, g, h, i) =>
      a + b + c + d + e + f + g + h + i;
    const curriedSum = curry(sum);
    expect(curriedSum(48)(75)(71)(10)(81)(85)(10)(45)(1)).toBe(426);
  });
});
