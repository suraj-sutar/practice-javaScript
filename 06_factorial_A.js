function factorialOfNum(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  if (num == 0 || num == undefined || num == null) {
    return `Invalied Input....`;
  }

  let fact = 1;
  for (let index = 1; index <= num; index++) {
    fact = fact * index;
  }
  return fact;
}

let num1 = factorialOfNum(5);
console.log(num1);

let num2 = factorialOfNum(3);
console.log(num2);

let num3 = factorialOfNum(null);
console.log(num3);

let num4 = factorialOfNum(8);
console.log(num4);

let num5 = factorialOfNum(undefined);
console.log(num5);

let num6 = factorialOfNum(9);
console.log(num6);

let num7 = factorialOfNum(0);
console.log(num7);
