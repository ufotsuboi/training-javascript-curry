/**
 * 問3. 関数を引数にとり、その関数をカリー化して返すカリー化関数を実装してください。
 *
 * 例）
 *   const sum = (a, b, c, d) => a + b + c + d;
 *   const curriedSum = curry(sum);
 *   curriedSum(1)(2)(3)(4);
 *   //=> 10
 */

const curry = func => {
  const partial = (store_args = []) => {
    return (...args) => {
      const new_args = store_args.concat(args);
      if (new_args.length >= func.length) {
        return func(...new_args);
      } else {
        return partial(new_args);
      }
    };
  };

  return partial();
};

module.exports = curry;
