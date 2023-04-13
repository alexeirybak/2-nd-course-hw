// Task 1

/*let str = 'js';
console.log(str.toUpperCase());*/

// Task 2

/*function str(arr, require) {
    return arr.map(element => element.toLowerCase()).filter(element => element.startsWith(require));
}

const searchStart= (['Кошка', 'Кит', 'Комар', 'Носорог']);

let require = 'ко';

console.log(str(searchStart, require));*/

// Task 3

/*let num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num))*/

// Task 4

/*const arr = [52, 53, 49, 77, 21, 32];

let minNum = Math.min(...arr);
let maxNum = Math.max(...arr);

console.log(minNum, maxNum);*/


// Task 5

/*num = Math.round(Math.random() * 10);*/

// Task 6

// Вариант 1

/*let num = Number(prompt('Введите целое число'));

const arr = [];
for (let i = 0; i < (num / 2); i++) {
	arr[i] = Math.round(Math.random() * num);
}

console.log(arr);*/

// Вариант 2

/*let num = Number(prompt('Введите целое число'));

const arr = (num, min, max) => Array.from({length: num}, (el => Math.floor(Math.random() * (max - min + 1)) + min));

console.log(arr);*/

// Task 7

/*let num1 = Number(prompt('Введите целое число'));

let num2 = Number(prompt('Введите еще одно целое число'));

function getRandom(num1, num2) {
	return Math.round(Math.random() * (num2 - num1) + num1);
  }

console.log(getRandom(num1, num2));*/

// Task 8

/*const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();
let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear();

console.log(fullDate);*/

// Task 9

// Вариант 1

/*let currentDate = new Date();

let dataAfter73 = new Date(+currentDate + 73 * 24 * 60 * 60 * 1000);

console.log(dataAfter73);*/

// Вариант 2

/*let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);*/

// Task 10

/*let currentDate = new Date();

const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

let fullDate = "Дата: " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear() + " - это " + days[currentDate.getDay()] + ". "; 

let fullTime = "Время: " + currentDate.getHours() + " " + currentDate.getMinutes() + " " + currentDate.getSeconds() + ".";

console.log(fullDate + fullTime); */

// Task 11

/*function words() {

	let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  
	arr = arr.sort(() => Math.random() - 0.5);
  
	alert(arr[0] + ' ' + arr[6]);
  
	let answer1 = String(prompt('Чему равнялся первый элемент массива?'));
  
	let answer2 = String(prompt('Чему равнялся последний элемент массива?'));
  
	if (answer1.toLowerCase() == arr[0].toLowerCase() && answer2 == arr[6].toLowerCase()) {
	  alert('Поздравляю, Вы угадали оба элемента массива');
	} else if (answer2.toLowerCase() == arr[0].toLowerCase() || answer2 == arr[6].toLowerCase()) {
	  alert('Вы были близки к победе!');
	} else {
	  alert('Вы ответили неверно! Стэнли Милгрэма на Вас нет!');
	}
  }*/
