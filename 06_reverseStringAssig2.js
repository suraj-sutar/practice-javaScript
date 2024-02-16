// let result = 0;
function reverseString(str) {
  for (let index = str.length - 1; index >= 0; index--) {
    var result = result + str.charAt(index);
  }
  return result;
}
let result = reverseString("Soon I Will br Angular IT Chanmp");
console.log(`${result}`);
