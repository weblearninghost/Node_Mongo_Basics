// Q. Merge 2 arrays without duplicates.
const _ = require('lodash');
const array1 = [1, 2, 3, 5, 6];
const array2 = [3, 4, 8, 9];
let finalArray = [];

// SOLUTION 1: USING LODASH
finalArrayUsingLodash = _.union(array1, array2);
console.log({ finalArrayUsingLodash });

// SOLUTION 2 : USING SPLICE (can't use delete method because it replaces the value with undefined)
function mergeArraysUsingSplice(arr1, arr2) {
  const a = arr1.concat(arr2);
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) a.splice(i, 1);
    }
  }
  return a;
}
const mergedUsingSplice = mergeArraysUsingSplice(array1, array2);
console.log({ mergedUsingSplice });
