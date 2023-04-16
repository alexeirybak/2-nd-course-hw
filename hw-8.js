// Task 1

// Вариант 1

/*function mult(arr) {
  result = arr[0] * arr[1] * arr[2] * arr[3];
  console.log(result);
}

function sum(arr) {
  result = arr[0] + arr[1] + arr[2] + arr[3];
  console.log(result);
}

function getResult(callback, arr) {
  callback(arr);
}

arr = [3, 4, 1, 9];

getResult(mult, arr);
getResult(sum, arr);*/

// Вариант 2

/*function getResult(arr, operation) {
  return Math.round(operation(arr));
}
const sum = (arr) => {
  return arr.reduce((currentSum, element) => currentSum + element);
}
const mult = (arr) => {
  return arr.reduce((currentMult, element) => currentMult * element);
}
console.log(getResult([3, 4, 1, 9], mult));
console.log(getResult([3, 4, 1, 9], sum)); */

// Task 2

/*function getResult(users) {
users.sort(function(a, b) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  return 0;
});
console.log(users);
}

const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

function getSortedArrayObj(callback, getResult) {
  callback(users);
}

getSortedArrayObj(getResult, users);*/

// Task 3

/*function reversArr(arr) {
  arr.reverse();
  console.log(arr);
}

function toNumberArr(arr) {
  arr = arr.filter(item => !isNaN(item));
  arr = arr.map(Number);
  console.log(arr);
}

function each(arr, callback) {
  callback(arr);
}

/*const arr = [1, '4', 9, 'two'];
each(arr, reversArr);*/

/*const arr = [1, '4', false, 9, 'two'];
each(arr, toNumberArr);*/

// Task 4

/*let timerId = setInterval(() => console.log(new Date()), 3000);

setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);*/

// Task 5

/*function calling() {
  console.log('Звоню!')
};

function beeps(callback) {
  setTimeout(() => {
      console.log('Идут гудки...')
      callback();
  }, 1000);
  
}

function talk() {
  console.log('Разговор')
}

calling();
beeps(talk);
*/
	





