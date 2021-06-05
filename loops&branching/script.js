let number1 = +prompt ("Напишіть число!)", 5);
console.log (number1);

while (!Number.isInteger(number1)) {
    number1 = +prompt("оуу shi.. має бути ціле число))");
    console.log (number1);
}

let number2 = +prompt ("Ще разок придумайте число", 'вік сина маминої подруги');
console.log (number2);

while (!Number.isInteger(number2)) {
    number2 = +prompt("ти знову?!..кажу ж, має бути ціле число))");
    console.log (number2);
}