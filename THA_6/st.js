var x = "Devsnest";
console.log(Array.isArray(x));
 console.log(isArray([1,2,3,6,8]))
var array_Clone = function (arr) {
  return arr.slice(0);
};
console.log(array_Clone([1, 2, 3, 4]));
console.log(array_Clone([1, 2, [3, 4]]));
console.log([1, 2, (3)[(4, 5)]]);
var first = function (arr, n) {
  if (arr == null) return void 0;

  if (n < 0) return [];

  return arr.slice(0, n);
};
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

mycolor = ["Red", "Green", "White", "Black"];
console.log(mycolor.toString());
