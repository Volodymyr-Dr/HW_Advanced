// 1 Створити функцію getMaxDigit(number) – яка отримує будь-яке число 
//та виводить найбільшу цифру в цьому числі.

function askUserAboutNumber () {
    
    let number1;
   
    while (!Number.isInteger(number1) || isNaN(number1) || number1 == '') {
    number1 = +prompt (' Функція №1: буде шукати найбільшу цифру в числі. Введіть будь-яке ціле число.') ;
}

    function getMaxDigit () {
    if (number1 == 0) { 
        return 0;
    } else {
        number1 = number1.toString().split('');
        return Math.max.apply (null, number1);
    }
}
    //console.log (getMaxDigit());
    return getMaxDigit ();
}

// 2 Створити функцію, яка визначає ступінь числа. Використовуйте цикл.

function askUserAboutPowNumber () {
    
    const N = +prompt("Функція №2: визначить ступінь числа. Ваше число:");
    const pow = +prompt("Ступінь:");

function getPowNumber () {
    let minus;

    if (pow < 0) minus = true;

    let nul = 1;
    let p = minus ? -pow : pow;
    for ( let i = 1; i <= p; i++) {
        nul *= N;
    } return minus ? 1 / nul : nul;
}
 //console.log (`${N}^${pow} = ${getPowNumber()}`);
 return getPowNumber();
}
 
// 3 Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
                 
function askUserName () {

const myName = prompt (`Функція №3: пропише Ваше ім'я з великої букви. Ваше ім'я?`);

function getUpperLetter () {
    return myName[0].toUpperCase() + myName.substring(1).toLowerCase();
    
}
//console.log(getUpperLetter())
    return (getUpperLetter());
}

// 4 Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.

function askUserAboutSalary() {

const salary = +prompt('Функція №4: вирахує чисту зп, після сплати податку (19,5%). Ваше зп?');
let profit;
const tax = 19.5;

function showMyProfit() {
    
    profit = salary - ((salary * tax) / 100);
    return profit;
}
 return showMyProfit();
//console.log(showMyProfit(`Вкурсі, що податок ${tax}%, тому твій прибуток становить ${profit}UAH`));
}

// 5 Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.

function askUserAboutNumbers () {

const numb1 = +prompt('Функція №5: повертає випадкове ціле число в діапазоні.  Напишіть перше число','');
const numb2 = +prompt('Напишіть інше число','');

function getRndInteger (minNumber, maxNumber) {
    minNumber = Math.min (numb1, numb2);
    maxNumber = Math.max (numb1, numb2);

    return Math.floor(Math.random() * (maxNumber - minNumber + 1) ) + minNumber;
}
//console.log(getRndInteger ());
return getRndInteger();
}


// 6 Створити функцію, яка рахує скільки разів певна буква повторюється в слові.

function askUserWord () {

const word = prompt('Функція №6: рахує скільки разів певна буква повторюється в слові. Напишіть якесь цікаве слово');
const letter = prompt('Напишіть букву, яку будемо шукати');

function findLetter () {
    let count = 0;
    
    for ( let char of word.toLowerCase()) {
        if (letter.includes(char)) {
            count += 1;
        }
    }
    return count;
}
//console.log(findLetter());
return findLetter();
}


// 7 Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.


function askUserAboutMoney () {
    const yourMoney = +prompt('Фунція №7: конвертує долари в гривні та навпаки.  Сколько дєнєг ти пріньос?');
    const currency = prompt ('Що саме будемо міняти?', 'UAH, $');

    function convertMoney () {
        
        const formattedurrencyToUpperase = currency.toUpperCase();
    
        if (formattedurrencyToUpperase == 'UAH') {
            return  +(yourMoney / 8).toFixed(2); 
        } else  if (formattedurrencyToUpperase == '$' || 'USD') {
            return +(yourMoney * 30).toFixed(2);
        } else {
            return 'У нас такого немає'
        }
    }
    //console.log (convertMoney ());

    return convertMoney (yourMoney, currency);

}


// 8 Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

function askUserAboutPassword () {
    
    len = +prompt('Фунція №8: генерує випадковий пароль.  Яка довжина паролю?');

    if ( len == '' || isNaN(len)) {
        len = 8;
    }

  function genPassword(){
      let password = "";
      let symbols = "0123456789";
      for (let i = 0; i < len; i++){
          password += symbols.charAt(Math.floor(Math.random() * symbols.length));     
      }
      return password;
  }
  //console.log(genPassword());
  return genPassword ();
  
  }


// 9 Створіть функцію, яка видаляє всі букви з речення. 

function askUserString () {

const yourString = prompt('Фунція №9: видаляє всі букви з речення.  Напишіть речення, над яким будете знущатись');
const letter = prompt('Напишіть букву, якої хочете позбутись');

function deleteLetters () {
    let result = yourString.split(`${letter}`).join('');
    return result;
}
//console.log (deleteLetters (letter, yourString));
return deleteLetters();
}



// 10 Створіть функцію, яка перевіряє, чи є слово паліндромом.

function askUserPalyndrom () {

let youStr = prompt ('Фунція №10: перевіряє, чи є слово паліндромом. Яке слово хочете перевірити?');

function isPalyndrom() {
    youStr = youStr.toLowerCase().replace(/[^a-zа-я0-9]+/g, '');
    
    if (youStr === youStr.split('').reverse().join('')) {
        return 'Вітаю, це є паліндром.';
    } else{
        return 'Нажаль!';
    }
  }

//console.log (isPalyndrom (youStr));
return isPalyndrom();
}


// 11 Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.

/* let str = prompt('Придумайте речення. Це вже в останнє))')

function unique_letters() {
    str = str.split('');
    let res = str.filter(function(val, i, str) {
    return str.lastIndexOf(val) === str.indexOf(val);
        
    });
    return res;
  }
  console.log(unique_letters()); */
      
  
  

 document.getElementById("i1").innerHTML = `Найбільша цифра тут ${askUserAboutNumber ()}`;
 document.getElementById("i2").innerHTML = `${askUserAboutPowNumber()}`;
 document.getElementById("i3").innerHTML =`${askUserName()}`;
 document.getElementById("i4").innerHTML =`${askUserAboutSalary()}`;
 document.getElementById("i5").innerHTML =`${askUserAboutNumbers()}`;
 document.getElementById("i6").innerHTML =`${askUserWord ()}`;
 document.getElementById("i7").innerHTML =`${askUserAboutMoney ()}`;
 document.getElementById("i8").innerHTML =`${askUserAboutPassword ()}`;
 document.getElementById("i9").innerHTML =`${askUserString ()}`;
 document.getElementById("i10").innerHTML =`${askUserPalyndrom ()}`;
 