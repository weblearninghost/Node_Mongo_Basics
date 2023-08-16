// Q. => Given Array = [1,2,'a','b',3,4] -> keep only numbers , do not generate new array

const array1 = [1, 2, 'a', 'b', 3, 'c', 6];

// SOLUTION 1: USING SPLICE
const deleteNonNumbersUsingSplice = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // 1.Using typeOf
    if (typeof arr[i] != 'number') {
      arr.splice(i, 1);
      i--;
    }

    // OR

    // USING IS-NAN
    // if (isNaN(arr[i])) {
    //   arr.splice(i, 1);
    //   i--;
    // }
  }
  return arr;
};
//console.log(deleteNonNumbersUsingSplice(array1));

//SOLUTION 3: USING FILTER
const deleteNonNumbersUsingFilter = (arr) => {
  return arr.filter((element) => {
    if (!isNaN(element)) return element;
  });
};
console.log(deleteNonNumbersUsingFilter(array1));
