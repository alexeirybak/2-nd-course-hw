// Task 1

/*const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
	if (arr[i] == 10) break;
	console.log(arr[i]);
}*/

// Task 2

// Вариант 1

/*let arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
	if (arr[i] == 4) console.log(i);
}*/

// Вариант 2

/*let arr = [1, 5, 4, 10, 0, 3];
console.log(arr.indexOf(4));*/

// Task 3

/*let arr = [1, 3, 5, 10, 20];

arr = arr.join(' ');

console.log(arr);*/

// Task 4

/*let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [1]; 
		
	for (let j = 0; j < 2; j++) {
		arr[i].push(1);
	}
}
	
console.log(arr);*/

// Task 5

// Вариант 1

/*let arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);*/

// Вариант 2

/*let arr = [1, 1, 1];

for (let i = 1; i <= 3; i++) {
arr.push(2)
};

console.log(arr);*/


// Вариант 3

/*let arr = [1, 1, 1];

for (let i = 0; i < 3; i++) {
arr.push(2)
};

console.log(arr);*/

// Вариант 4

/*let arr1 = [1, 1, 1];
let arr2 = [2, 2, 2];
let arrCommon = [...arr1, ...arr2];
console.log(arrCommon);*/

// Вариант 5

/*let arr1 = [1, 1, 1];
let arr2 = [2, 2, 2];
let arrCommon = arr1.concat(arr2);*/

// Task 6

// Вариант 1

/*let arr = [9, 8, 7, 'a', 6, 5];
arr = arr.filter(item => item !== 'a');
arr = arr.sort()
console.log(arr); */

// Вариант 2

/*let arr = [9, 8, 7, 'a', 6, 5];
arr = arr.filter(item => !isNaN(item));
arr = arr.sort()
console.log(arr); */

// Task 7

// Вариант 1

/*const arr = [9, 8, 7, 6, 5];

let result, checkNumber = prompt('Введите число от 1 до 10');

for(var i=0; i < arr.length; i++) {
    if(checkNumber == arr[i]) {
        result = 1;
	}
}

if(result == 1) {
	alert(`Число ${checkNumber} в массиве существует`);
} else { 
	alert(`Числа ${checkNumber} в массиве не существует`);
}*/

// Вариант 2

/*const arr = [9, 8, 7, 6, 5];

let result, checkNumber = Number(prompt('Введите число от 1 до 10'));

result = arr.includes(checkNumber);

if (result) {
	alert(`Число ${checkNumber} в массиве существует`);
} else {
	alert(`Числа ${checkNumber} в массиве не существует`);
}*/

// Task 8

/*let str = 'abcdef';

strChange = str.split('');

strChange = strChange.reverse();

str = strChange.join('');

console.log(str);*/

// Task 9

/*let arr1 = [1, 2, 3];

let arr2 = [4, 5, 6];

let arr = arr1.concat(arr2);

console.log(arr);*/

// Task 10

/*let arr = [3, 7, 4, 9, 1, 10, 6, 2, 8, 5];

for (let i = 0; i < arr.length; i++) {
	
	console.log(arr[i] + arr[i + 1]);
}*/

// Task 11

/*const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrResult = arr.map(function (num) {
  return num * num
})

console.log(arrResult)*/

// Task 12

/*let getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
getLengthWords = getLengthWords.map(str => str.length);

console.log(getLengthWords);*/

// Task 13

/*let arr = [1, -2, 3, -4, 5, -6, 7, -8, 9];

arr = arr.filter(item => item <= 0);

console.log(arr);*/

// Task 14

/*let arr = [];
for (let i = 0; i < 10; i++) {
	arr[i] = Math.round(Math.random() * 10);
}

arrNew = arr.filter(el => el % 2 === 0);

console.log(arr);
console.log(arrNew);*/

// Task 15

/*const arr = [];
for (let i = 0; i < 6; i++) {
	arr[i] = Math.round(Math.random() * 9 + 1);

}

const sum = arr.reduce((a, b) => a + b) / arr.length;

console.log(arr);
console.log(sum);*/