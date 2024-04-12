/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns an array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  //
  let res = [];
  if (arr.length === 0) return res;
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      res.push(arr[i]);
    } else {
      res.push(...flatten(arr[i]));
    }
  }
  return res;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
