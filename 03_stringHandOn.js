function stringHandsOn(str) {
  console.log(
    `------------------------------Step 1------------------------------`
  );
  console.log(`Given String : ${str}`);

  console.log(
    `------------------------------Step 2------------------------------`
  );
  console.log(`Length Of Given String: ${str.length}`);

  console.log(
    `------------------------------Step 3------------------------------`
  );
  console.log(`After Remove leading and Extra Space: ${str.trim()}`);

  console.log(
    `------------------------------Step 4------------------------------`
  );
  var trimStringlength = str.trim().length;

  var calExtraRemoveSpace = str.length - trimStringlength;
  console.log(`Calculte Extra Remove Space: ${calExtraRemoveSpace}`);

  console.log(
    `------------------------------Step 5------------------------------`
  );
  console.log(
    `After trim First Character: ${str
      .trim()
      .charAt(0)} And Last Character: ${str
      .trim()
      .charAt(str.trim().length - 1)}`
  );

  console.log(
    `------------------------------Step 6------------------------------`
  );

  var countWords = str.trim().split(" ");

  console.log(`Total Number Of Words: ${countWords.length}`);

  console.log(
    `------------------------------Step 7------------------------------`
  );
  console.log(`Index Of "good" : ${str.trim().indexOf("good")}`);

  console.log(
    `------------------------------Step 8------------------------------`
  );
  console.log(
    `Print Substring Starting from 22 index: ${str.trim().slice(22)}`
  );

  console.log(
    `------------------------------Step 9------------------------------`
  );
  console.log(
    `Check is String ends with word "Up" : ${str.trim().endsWith("up")}`
  );
}
stringHandsOn("    Hey you are doing good, keep it up    ");
