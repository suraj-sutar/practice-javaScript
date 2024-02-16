//Synchronous :so the execution of each operation depends on completing the one before it.
//for ex: i have two oprations a - 5s and b - 1s task b execute after 5s
//Asynchronous : it execute the each task at the same time is not depends on another operation
//for ex: i have two oprations a - 5s and b - 1s task b is execute before the task a beacuse it take less time as compare to task a

//how you can understande the your code is synchronous or asynchronous?
//when you are using in your code setTimeout,setinterval,promises , or fetch then this code is asynchronous code

//callback is function that pass as a parameter to another function
// setTimeout(callback, time in milisecond);
console.log(`heyyy`);
setTimeout(function () {
  console.log(`heyy2`);
}, 2000);
console.log(`heyy3`);

//callback: when you are writing some code that execute after some time after executing
// that code if you want to execute one function that function means callback function

// to write asynchronous code we use
//basically it uses for only sending the request
//fetch
//XMLHttpRequest
//promises
//settimeout
//setinterval

//to get the answer we are use
//callback
//then catch
//async and await

// promise
//ans that can be  in a three state that is pending ,resolve or reject
// let ans = new Promise((res, rej) => {
//   if (false) {
//     return res();
//   } else {
//     return rej();
//   }
// });
// ans
//   .then(function () {
//     console.log(`Ans Resolve`);
//   })
//   .catch(function () {
//     console.log(`Ans Reject`);
//   });

//Another Example: USer will ask for a number between 0 to 9 and
// if the number is below 5 resolve if not reject

// let num = 7;
// let checkNum = new Promise((res, rej) => {
//   if (num < 5) {
//     return res();
//   } else {
//     return rej();
//   }
// });
// checkNum
//   .then(function () {
//     console.log(`Below`);
//   })
//   .catch(function () {
//     console.log(`Above`);
//   });

//write a program execute this statement one by one using promis
//sabse pahile ghar par aao
//gate kholo aur gate lagao
//khana pakao khana kaho
//incongito mode chalao
//sojao kyuki tum thak gaye hoo

// var firstPromise = new Promise((res, rej) => {
//   return res(`sabse pahile ghar par aao`);
// });

// after execute first line immidiatle excute another promise
// let secondPromise = firstPromise.then(function (data) {
//   console.log(data);
//i return one promise to store that in one variable that is secondPromise
//   return new Promise(function (res, rej) {
//     return res(`gate kholo aur fate lagao`);
//   });
// });

// let thirdPromise = secondPromise.then(function (data) {
//   console.log(data);
//   return new Promise(function (res, rej) {
//     return res(`Khana pakao khana khaoo`);
//   });
// });

// let forthpromise = thirdPromise.then(function (data) {
//   console.log(data);
//   return new Promise(function (res, rej) {
//     return res(`incongito mode chalao`);
//   });
// });

// let fifthPromise = forthpromise.then(function (data) {
//   console.log(data);
//   return new Promise(function (res, rej) {
//     return res(`sojao kuwki tume thak chuke hoo`);
//   });
// });

// firstPromise.then(function (data) {
//   console.log(data);
// });
