// Reverse the given string

// const str1 = 'uSB Drive';

// // With Build-In Reverse Method
// function reverseString(str) {
//   const a = str.split(' '); // Split returns string as array
//   console.log({ a });
//   const reversed = a.reverse();
//   console.log({ reversed });
//   const result = reversed.join(''); // Join method returns array as a string
//   return result;
// }

// const reversedResult = reverseString(str1);
// console.log({ reversedResult });

// // With logic
// function withLogic(str) {
//   const stringToArray = str.split('');
//   let reversedArray = [];
//   for (let i = stringToArray.length; i >= 0; i--) {
//     reversedArray.push(stringToArray[i]);
//   }
//   console.log({ reversedArray });
//   const result = reversedArray.join('');
//   return result;
// }
// const reversedStringWithLogic = withLogic('lalita');
// console.log({ reversedStringWithLogic });

// //with New for syntax
// function withNewForSyntax(str) {
//   let reversed = '';
//   for (let element of str) {
//     reversed = element + reversed;
//   }
//   return reversed;
// }
// const reversedString = withNewForSyntax('Abhishek');
// console.log({ reversedString });

// //with reduce
// function withReduce(str) {
//   return str.split('').reduce((reverse, char) => {
//     return (char = char + reverse);
//   });
// }
// const reversedWithReduce = withReduce('ABHISHEK');
// console.log({ reversedWithReduce });

//eex

const products = ['USB Cable', 'USB Drive', 'i Phone'];
const categories = ['USB acc', 'Phone'];

function isLikelyName(productName, categoryName) {
  const productNameKeywords = productName.split(' ');
  const categoryNameKeywords = categoryName.split(' ');

  let result = {};
  let products = [];
  productNameKeywords.forEach((productKeyword) => {
    categoryNameKeywords.forEach((categoryKeyword) => {
      if (productKeyword == categoryKeyword) {
        products.push(productName);
        result[categoryName] = products;
      }
    });
  });

  console.log({ result });
  return result;
}

function categoriseProducts(products, categories) {
  let sorted = [];
  products.forEach((product) => {
    categories.forEach((category) => {
      const result = isLikelyName(product, category);
      if (result) {
        sorted.push(result);
      }
    });
  });
  console.log({ sorted });
}
categoriseProducts(products, categories);
