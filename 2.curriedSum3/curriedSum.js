/**
 * 問2. 3つの数字を引数をとり、それらの合計値を返すカリー化された関数を実装してください。
 *
 * 例）
 *   curriedSum(1, 2, 3);
 *   //=> 6
 *
 *   curriedSum(1)(2, 3);
 *   //=> 6
 */

const curriedSum = (a, b, c) => {
  if (c === undefined) {
    if (b === undefined) {
      return (x, y) => {
        if (y === undefined) {
          return z => a + x + z;
        } else {
          return a + x + y;
        }
      };
    } else {
      return z => a + b + z;
    }
  } else {
    return a + b + c;
  }
};

module.exports = curriedSum;
