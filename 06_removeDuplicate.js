console.log(
  `--------------------------------------Step 1--------------------------------------`
);
//Remove Duplicate element from array using for loop

//first create function and one argument that is array
function removeDuplicate(arr) {
  //second create empty array to store unique vlaue from array
  let emptyArray = [];

  //then create for of loop beacouse we work on elements
  for (const element of arr) {
    //then check empty element element are add repeated or not
    if (emptyArray.indexOf(element) == -1) {
      emptyArray.push(element);
    }
  }
  return emptyArray;
}
let array = [11, 3, 4, 11, 4, 7, 3];
console.log(removeDuplicate(array));

console.log(
  `--------------------------------------Step 2--------------------------------------`
);

function strFirstAndLastElementCapital(str) {
  //first split the given string using split method
  let words = str.split(" ");

  //then create empty Array to store that words
  let emptyArray = [];

  //then create for of loop
  for (const word of words) {
    //then make first element capital
    let firstElement = word.charAt(0).toUpperCase();

    //then make last element capital
    let lastElement = word.slice(-1).toUpperCase();

    //we create a separate element so we add this all element
    let addWord = firstElement + word.slice(1, -1) + lastElement;

    //add this word in empty array
    emptyArray.push(addWord);
  }

  //then join this array using join method
  let joinString = emptyArray.join(" ");
  return joinString;
}

let str = strFirstAndLastElementCapital("how are you mate");
console.log(str);
