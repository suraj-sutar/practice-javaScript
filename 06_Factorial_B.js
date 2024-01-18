function factorialOfWordsCount(str) {
  if (str == null || str == undefined) {
    return `Invalied Input....`;
  }
  let splitStr = str.split(" ");

  let fact = 1;
  for (let index = 1; index <= splitStr.length; index++) {
    fact = fact * index;
  }
  return fact;
}
let str1 = factorialOfWordsCount("Revision is the mother of success");
console.log(str1);

let str2 = factorialOfWordsCount("We never fail, we always learn, Mind it");
console.log(str2);

let str3 = factorialOfWordsCount(null);
console.log(str3);

let str4 = factorialOfWordsCount("");
console.log(str4);

let str5 = factorialOfWordsCount("Suraj Tanaji Sutar");
console.log(str5);
