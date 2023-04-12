function season() {
    let month = Number(prompt('Введите номер месяца'));
    if (month === 12 || month === 1 || month === 2) {
      alert('Зима');
    } else if (month >= 3 && month <=5) {
      alert('Весна');
    } else if (month >=6 && month <=8) {
      alert('Лето');
    } else if (month >=9 && month <=11) {
      alert('Осень');
    } else {
      alert('Вы ввели что-то не то!');
    }
  }

function words() {

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
}
