console.log(`-----------------------------Step 1-----------------------------`);
var str = "I am very good IT Developer";
var count = 0;
for (let index = 0; index < str.length; index++) {
  let char = str.charAt(index).toLowerCase();
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    count++;
  }
}
console.log(`Total Number Of Vowels Are: ${count}`);

console.log(`-----------------------------Step 2-----------------------------`);
var sumOfCubeIndex = 0;
function cubeOfNum() {
  for (let index = 1; index <= 5; index++) {
    let calCubeOfIndex = index * index * index;

    sumOfCubeIndex = sumOfCubeIndex + calCubeOfIndex;
  }
  console.log(`Total Sum Of Cube Of Index : ${sumOfCubeIndex}`);
}
cubeOfNum();
