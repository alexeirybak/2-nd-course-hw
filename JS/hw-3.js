// Task 1

/*let password = 'пароль';

let input = prompt('Введите пароль');

if (input === password) {
	alert(`Пароль введен верно`);
} else {
	alert(`Пароль введен неверно`);
}*/

// Task 2
/*let compareNumber = 2;

if (compareNumber > 0 && compareNumber < 10) {
	alert('Верно');
  } else {
	alert('Неверно');
  }*/

// Task 3

/*let d = 55, e = 111;

if (d > 100 || e > 100) {
	alert('Верно');
  } else {
	alert('Неверно');
  }*/

// Task 5

/*let a = '2';
let b = '3';

a = Number(a);
b = Number(b);

alert(a + b);*/

// Task 6

/*let monthNumber = prompt('Введите номер месяца');

if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {
  console.log('Сейчас зима');
} else if (monthNumber >= 3 && monthNumber <= 5) {
  console.log('Сейчас весна');
} else if (monthNumber >= 6 && monthNumber <= 8) {
  console.log('Сейчас лето');
} else if (monthNumber >= 9 && monthNumber <= 11) {
  console.log('Сейчас осень');
} else {
  console.log('Такого месяца не существует');
}*/

// Additional practice

// Task 7

/*let input = prompt('Пожалуйста, введите любое число');

if (input%2 === 0) {
	alert('Число четное');
} else {
	alert('Число нечетное');
}*/

// Task 8
/*let clientOS = prompt('Предлагаем Вам установить наше мобильное приложение. Если Ваше мобильное устройство на iOS, нажмите "0", если на Andrion - нажмите "1".');

if (clientOS == 0) {
	alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS == 1) {
	alert('Установите версию приложения для Android по ссылке');
} else {
	alert('Такой операционной системы не существует');
}*/

// Task 9
let clientOS = prompt('Предлагаем Вам установить наше мобильное приложение. Если Ваше мобильное устройство на iOS, нажмите "0", если на Andrion - нажмите "1"');

if (clientOS == 0) {
	clientDeviceYear = prompt('Введите год выпуска мобильного устройства');
	if (clientDeviceYear < 2015) {
		alert('Установите облегченную версию приложения для iOS по ссылке');
	} else {
		alert('Ваша ссылка на скачивание');
	}
} else {
	clientDeviceYear = prompt('Введите год выпуска мобильного устройства');
	if (clientDeviceYear < 2015) {
		alert('Установите облегченную версию приложения для Andriod по ссылке');
	} else {
		alert('Ваша ссылка на скачивание'); 
	}
}