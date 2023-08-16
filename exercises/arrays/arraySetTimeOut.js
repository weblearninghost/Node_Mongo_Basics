// Q. Log 1, 2 3, 4, 5 using setTimeOut

// USING VAR
for (var i = 0; i < 6; i++) {
  setTimeout(() => {
    console.log({ i });
  }, 0);
}
console.log('-------------------------');
// USING LET
for (let i = 0; i < 6; i++) {
  setTimeout(() => {
    console.log({ i });
  }, 0);
}
