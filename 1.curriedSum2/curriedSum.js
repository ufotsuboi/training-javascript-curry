/**
 * 問1. 2つの数字を引数をとり、それらの合計値を返すカリー化された関数を実装してください。
 *
 * 例）
 *   curriedSum(1, 2);
 *   //=> 3
 *
 *   curriedSum(1)(2);
 *   //=> 3
 */

const curriedSum = (a, b) => {
  if (b === undefined) {
    return x => a + x;
  } else {
    return a + b;
  }
};

module.exports = curriedSum;
