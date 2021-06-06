alert (`Зараз займемось математикою. Знайдемо загальну суму чисел від першого до другого числа.`)

let number1;

do { number1 = +prompt("Придумайте число", '');
} while (!Number.isInteger(number1) || isNaN(number1) || number1 == '');

let number2;

do { number2 = +prompt ("Ще разок, інше число", '');
} while (!Number.isInteger(number2) || isNaN(number2) || number2 == '')

let minNumber = Math.min (number1, number2);
let maxNumber = Math.max (number1, number2);

let question = confirm ("Парні числа пропускаємо (ОК) чи залишаємо (СКАСУВАТИ)?");

let sum = 0;
for ( let i = minNumber; i <= maxNumber; i++) {
    if (question && i % 2 == 0) continue;
    sum += i;
}
alert (`Сума всіх чисел: ${sum}`);