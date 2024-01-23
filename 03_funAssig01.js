console.log(
  `------------------------------Step 1------------------------------`
);
function firstFunction() {
  console.log(`This is My First Function With No Argument And No return Value`);
}
firstFunction();

function secondFunction() {
  console.log(
    `This Is My Second Function With No Argument And No retrun Value`
  );
}
secondFunction();

console.log(
  `------------------------------Step 2------------------------------`
);

function personalDetails(firstName, lastName, collageName) {
  console.log(`First Name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);
  console.log(`Collage Name: ${collageName}`);
}
personalDetails(
  "Suraj",
  "Sutar",
  "K J Collage Of Engineering And Management Research"
);

console.log(
  `------------------------------Step 3------------------------------`
);

function swapValues(val1, val2, temp = 0) {
  console.log(`Before Swap Value 1 : ${val1} And Value 2 : ${val2}`);
  temp = val1;
  val1 = val2;
  val2 = temp;
  console.log(`After Swap Value 1 : ${val1} And Value 2 : ${val2}`);
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);
