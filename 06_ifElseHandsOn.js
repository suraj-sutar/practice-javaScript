var isEvenOrOddNum = function (num) {
  if (num % 2 == 0) {
    console.log(`Given Number is Even`);
  } else {
    console.log(`Given Number is Odd`);
  }
};
isEvenOrOddNum(45);
isEvenOrOddNum(70);

var eligibleForVote = function (age) {
  if (age >= 18) {
    console.log(`Given Person is Eligible for VOte`);
  } else {
    console.log(`Given Person is Not Eligible for VOte`);
  }
};
eligibleForVote(17);
eligibleForVote(20);
eligibleForVote(18);
