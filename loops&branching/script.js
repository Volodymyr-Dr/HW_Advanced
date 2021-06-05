let number1 = +prompt ("Напишіть число!)", 5);

while (!Number.isInteger(number1)) {
    number1 = +prompt("оуу shi.. має бути ціле число))");
}

let number2 = +prompt ("Ще разок придумайте число", 'вік сина маминої подруги');

while (!Number.isInteger(number2)) {
    number2 = +prompt("ти знову?!..кажу ж, має бути ціле число))");
}

let minNumber = Math.min (number1, number2);
let maxNumber = Math.max (number1, number2);

let question = confirm ("Парні числа пропускаємо (ОК) чи залишаємо (СКАСУВАТИ)?");

let sum = 0;
for ( let i = minNumber; i <= maxNumber; i++) {
    if (question && i % 2 == 0) continue;
    sum += i;
}
alert (sum);