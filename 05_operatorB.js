function greaterNumber(num1, num2) {
  var greaterNum =
    num1 > num2
      ? `Number 1 is Greater Than Number 2`
      : `Number 1 is Less Than Number 2`;

  console.log(greaterNum);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

function isEvenOrOddNum(val) {
  var isEvenOrOdd = val % 2 == 0 ? `Even` : `Odd`;
  console.log(isEvenOrOdd);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
