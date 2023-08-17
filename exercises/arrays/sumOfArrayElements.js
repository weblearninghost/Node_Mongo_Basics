// SUM of array and use of forEach loop

const array = [4, 5, 6, 7, 8, 9];

function sumOfArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log({ sum });
}
//sumOfArrayElements(array);

// with forEach

function sumUsingForEach(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum = sum + element;
  });
  console.log({ sum });
}

sumUsingForEach(array);

// use of forEach to calculate area and learning how to traverse through array of objects

const images = [
  { height: 5, width: 10 },
  { height: 5, width: 4 },
  { height: 8, width: 9 },
];

function printArea(imageArray) {
  const areas = [];
  imageArray.forEach((image) => {
    areas.push(image.height * image.width);
  });
  console.log({ areas });
}
printArea(images);
