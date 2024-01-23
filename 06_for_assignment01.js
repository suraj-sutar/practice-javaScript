console.log(
  `--------------------------------Step 1--------------------------------`
);
for (let index = 5; index <= 15; index++) {
  console.log(index);
}

console.log(
  `--------------------------------Step 2--------------------------------`
);

for (let index = 50; index >= 40; index--) {
  console.log(index);
}

console.log(
  `--------------------------------Step 3--------------------------------`
);

count = 0;
for (let index = 1; count < 15; index++) {
  if (index % 2 !== 0) {
    console.log(index);
    count++;
  }
}

console.log(
  `--------------------------------Step 4--------------------------------`
);
count = 0;
for (let index = 2; count < 15; index++) {
  if (index % 2 == 0) {
    console.log(index);
    count++;
  }
}

console.log(
  `--------------------------------Step 5--------------------------------`
);
var num = 5;

for (let index = 1; index <= 10; index++) {
  var table = num * index;
  console.log(table);
}
