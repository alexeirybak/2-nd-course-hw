// Task 1

/*for (let i = 1; i <= 2; i++) {
  alert(`Привет!`);
}*/

// Task 2

/*for (let i = 1; i <= 5; i++) {
    console.log(i);
  }*/

// Task 3

/*for (let i = 7; i <= 22; i++) {
    console.log(i);
  }*/

// Task 4

/*const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
  };
  
  for (let people in obj) {
    alert(people + " - зарплата " + obj[people] + " долларов");
  }*/

 // Еще вариант

  /*const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
  }
  
  for (const key in obj) {
    console.log(`${key} – зарплата ${obj[key]} долларов`)
  }*/

// Task 5

/*let n = 1000;
for (num = 0; n > 50; num++) {
  n /= 2;
}

alert(n);
alert(num);

*/

// Вариант 2

/*let num = 0, n = 1000;
while (n >= 50) { 
  n /= 2;
  num++;
}

alert(n);
alert(num);*/

// Task 6
let firstFriday = Number(prompt('Какое число - первая пятница месяца?'));
let day = firstFriday;

while (day <= 31) {
  if (day === firstFriday || day % 7 === firstFriday % 7) {
    alert(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
  }
  day++;
}
