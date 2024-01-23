function maleMarriageEligibility(gender, age, boyName) {
  var marriageResult =
    gender == "Male" && age >= 21
      ? `Eligible For Marriage`
      : `Not Eligible For Marriage`;
  return marriageResult;
}
var result = maleMarriageEligibility("Male", 25, "Billgates");
console.log(result);

var result = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(result);
