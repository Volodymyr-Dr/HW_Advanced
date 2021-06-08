// 1 Створити функцію getMaxDigit(number) – яка отримує будь-яке число 
//та виводить найбільшу цифру в цьому числі.

let number1;
number1 = +prompt ('Введіть будь-яке число');

function getMaxDigit (number1) {
    if (number1 == 0) {
        return 0;
    } else {
        return Math.max (number1 % 10, getMaxDigit(Math.floor(number1 / 10)));
    }
}

console.log (getMaxDigit(number1));
alert (`Найбільша в ньому цифра: ${getMaxDigit(number1)}`);


// 2 Створити функцію, яка визначає ступінь числа. Використовуйте цикл.
let N = +prompt("Число:");
let pow = +prompt("Ступінь:");

function getPowNumber (N, pow) {
    let minus;

    if (pow < 0) minus = true;

    let nul = 1;
    let p = minus ? -pow : pow;
    for ( let i = 1; i <= p; i++) {
        nul *= N;
    } return minus ? 1 / nul : nul;
}
 
alert(`Число ${N} в ступені ${pow} = ${getPowNumber(N, pow)}`);

// 3 Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
                 
let myName = prompt (`Ваше ім'я`);

function getUpperLetter (myName) {
    return myName[0].toUpperCase() + myName.toLowerCase(1);
    
}
console.log(getUpperLetter(myName))
alert (`Дотримуйся граматики, пиши ім'я з великої букви! ${getUpperLetter(myName)}`);


// 4 Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.

let salary = +prompt('Твоя зп?');
let profit;
let tax = 19.5;

function showMyProfit () {
    
    profit = salary - ((salary * tax) / 100);
    return profit;
}
showMyProfit();
console.log(showMyProfit());
alert (`Вкурсі, що податок ${tax}%, тому твій прибуток становить ${profit}UAH`);

// 5 Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.

let numb1 = +prompt('Напишіть число','');
let numb2 = +prompt('Напишіть інше число','');

let minNumber;
let maxNumber;

function getRndInteger (minNumber, maxNumber) {
    minNumber = Math.min (numb1, numb2);
    maxNumber = Math.max (numb1, numb2);

    return Math.floor(Math.random() * (maxNumber - minNumber + 1) ) + minNumber;
}
console.log(getRndInteger (minNumber, maxNumber));
alert (`Рандомне число між обраними: ${getRndInteger (minNumber, maxNumber)}`)

// 6 Створити функцію, яка рахує скільки разів певна буква повторюється в слові.

