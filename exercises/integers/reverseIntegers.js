function reverseInt(integer) {
  return parseInt(integer.toString().split('').reverse().join(''));
}
const a = reverseInt(2567);
console.log({ a });
