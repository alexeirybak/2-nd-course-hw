// Task 1

/*function compareNumber(a, b) {
  return a < b ? a : b;
}
console.log(compareNumber(4, 8));*/

// Task 2

/*let number = Number(prompt("Введите число"));
function checkNumber(number) {
  if(number % 2 === 0) {
    return "Число четное";
  } else {
      return "Число нечетное";
    }
}
alert(checkNumber(number));*/

// Task 3.1

/*let number = Number(prompt("Введите число"));
function squareNumber(number) {
  return number *= number;
}
console.log(squareNumber(number));*/

// Task 3.2

/*let number = Number(prompt("Введите число"));
function squareNumber(number) {
  return number *= number;
}
alert(squareNumber(number));*/

// Task 4

/*let age = Number(prompt('Введите возраст'));
function checkAge(age) {
  if(age < 0) {
    return "Вы ввели неправильное значение";
  } else if(age >= 0 && age <= 12) {
    return "Привет, друг!";
  } else {
    return "Добро пожаловать!";
  }
}
  
alert(checkAge(age));*/

// Task 5

/*let number1 = prompt('Введите первое число');
let number2 = prompt('Введите второе число');
function checkNumbers(number1, number2) {
  if (isNaN(number1) || isNaN(number2)) {
    alert("Хм, одно или оба значения не являются числом ((");
  } else {
    return number1 * number2;
  }
}
alert(checkNumbers(number1, number2));*/

// Task 6

/*let number = prompt('Введите число');
function checkNumber(number) {
  if (isNaN(number)) {
    return "Переданный параметр не является числом";
  } else {
    return (`n в кубе равняется ${number ** 3}`);
  }
}
alert(checkNumber(number));*/

// Task 7

let paramCircle1 = prompt("Введите радиус первой окружности"), 
paramCircle2 = prompt("Введите радиус второй окружности");
const circle1 = {
	radius: paramCircle1,
	getArea() {
		return circle1.radius ** 2 * Math.PI;
	},
  getLength() {
		return circle1.radius * 2 * Math.PI;
	}
}
const circle2 = {
	radius: paramCircle2,
	getArea() {
		return circle2.radius ** 2 * Math.PI;
	},
  getLength() {
		return circle2.radius * 2 * Math.PI;
	}
}
alert(`Площадь первой окружности равна ${circle1.getArea()}`)
alert(`Длина первой окружности равна ${circle1.getLength()}`);
alert(`Площадь второй окружности равна ${circle2.getArea()}`);
alert(`Длина второй окружности равна ${circle2.getLength()}`);

// Вариант 2
/*let paramCircle1 = prompt("Введите радиус первой окружности"), 
paramCircle2 = prompt("Введите радиус второй окружности");
function getCircleArea() {
  return this.radius ** 2 * Math.PI;
}
function getCircleLength() {
  return this.radius * 2 * Math.PI;
}
const circle1 = {
  radius: paramCircle1,
  
  getArea: getCircleArea,
  getLength: getCircleLength,
};
const circle2 = {
  radius: paramCircle2,
  
  getArea: getCircleArea,
  getLength: getCircleLength,
};
console.log(circle1.getArea());
console.log(circle1.getLength());
console.log(circle2.getArea());
console.log(circle2.getLength());*/

// Task 8

/*let month = Number(prompt('Введите номер месяца'));
function season(month) {
  if (month === 12 || month === 1 || month === 2) {
    return 'Зима';
  } else if (month >= 3 && month <=5) {
    return 'Весна';
  } else if (month >=6 && month <=8) {
    return 'Лето';
  } else if (month >=9 && month <=11) {
    return 'Осень';
  } else {
    return 'Вы ввели что-то не то!';
  }
}
alert(season(month));*/