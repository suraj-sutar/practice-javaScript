let interviewEleigible = function (
  gradScore,
  hscScore,
  sscScore,
  candidateName
) {
  if (gradScore >= 70 || hscScore >= 80 || sscScore > 90) {
    console.log(
      `Congrates ${candidateName} you are eligible for TCS interview`
    );
  } else {
    console.log(
      `Congrates ${candidateName} you are Not eligible for TCS interview`
    );
  }
};
interviewEleigible(80, 86, 90, "Kashinath");
interviewEleigible(70, 65, 55, "Yash");
