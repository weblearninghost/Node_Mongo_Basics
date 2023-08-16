// Reverse the given string

const str1 = 'lalita';

// With Build-In Reverse Method
function reverseString(str) {
  const a = str.split(''); // Split returns string as array
  console.log({ a });
  const reversed = a.reverse();
  console.log({ reversed });
  const result = reversed.join(''); // Join method returns array as a string
  return result;
}

const reversedResult = reverseString(str1);
console.log({ reversedResult });

// With logic
function withLogic(str) {
  const stringToArray = str.split('');
  let reversedArray = [];
  for (let i = stringToArray.length; i >= 0; i--) {
    reversedArray.push(stringToArray[i]);
  }
  console.log({ reversedArray });
  const result = reversedArray.join('');
  return result;
}
const reversedStringWithLogic = withLogic('lalita');
console.log({ reversedStringWithLogic });

//with New for syntax
function withNewForSyntax(str) {
  let reversed = '';
  for (let element of str) {
    reversed = element + reversed;
  }
  return reversed;
}
const reversedString = withNewForSyntax('Abhishek');
console.log({ reversedString });

//with reduce
function withReduce(str) {
  return str.split('').reduce((reverse, char) => {
    return (char = char + reverse);
  });
}
const reversedWithReduce = withReduce('ABHISHEK');
console.log({ reversedWithReduce });
