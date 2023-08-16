// Check if string is palindrome or not

const str1 = 'abbbba';
const str2 = 'hfhfy';

//My Solution

function isPalindrome(str) {
  const reverse = str.split('').reduce((rev, char) => {
    return (char = char + rev);
  }, '');
  return str === reverse;
}
console.log(isPalindrome('xxxyxxx'));
console.log(isPalindrome(str2));

// with reverse() method
function isPalindromeWithReverse(str) {
  const reverse = str.split('').reverse().join('');
  return reverse === str;
}
console.log(isPalindromeWithReverse('wwwyywww'));

//with every() array helper
function isPalindromeWithEvery(str) {
  const result = str.split('').every((char, index) => {
    return char === str[str.length - index - 1];
  });
  console.log({ result });
}

isPalindromeWithEvery('aabaa');
