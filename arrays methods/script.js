// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 

function askUserAboutLenght () {
    const lengthArray = +prompt(`Яка довжина масиву потрібна?`, `Від 0 до 100`);


const getRandomArray = (() => {
    min = 0;
    max = 100;
    let randomArray = [];
    for (let i = 0; i < lengthArray; i++) {
        randomArray[i] = [Math.floor(Math.random() * (max - min + 1)) + min];
    }
    return randomArray.join().split();
});
console.log('Випадкові числа:', getRandomArray());
}
askUserAboutLenght()



// 2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів.



// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

let numbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

const getAverage = () => {
    numbers.filter((item) => {
        return (Number.isInteger(item) || !item);
    });
    const total = numbers.reduce((total, number) => {
        return total + number;
    }, 0);
    return total /  numbers.length;  
};
console.log(`Середнє арифметичне:`, getAverage());

// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
 
let yourSetOfNumbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

function getMedian(yourSetOfNumbers) {

    yourSetOfNumbers.filter((item) => (Number.isInteger(item) || !item));

    let count = 0;
    
    yourSetOfNumbers.sort((a, b) => a - b);

    do {
        yourSetOfNumbers.pop();
        yourSetOfNumbers.shift();
    } while (yourSetOfNumbers.length > 2)
    
    if (yourSetOfNumbers.length === 2) {
        for (let i = 0; i < yourSetOfNumbers.length; i++) {
            count = (yourSetOfNumbers[0] + yourSetOfNumbers[1]);
            return count / 2;
        }
    }
    return yourSetOfNumbers[0];
}
console.log('Медіана:', getMedian(yourSetOfNumbers))

// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції

let allNumbers = [1, 2, 3, 4, 5, 6];

function getEvenNumbers () {
    allNumbers = allNumbers.filter(item => !(item % 2 === 0) )
    return allNumbers;
}
console.log('Масив непарних чисел:', getEvenNumbers());

// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0.

let setOfNumbers = [1, -2, 3, -4, -5, 6, 9];

function positiveNumber() {
    setOfNumbers = setOfNumbers.filter(item => item > 0);
    return setOfNumbers.length;
}
console.log('Числа більші 0:', positiveNumber())


// 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5.

let dividedByFive = [6, 2, 55, 11, 25, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

function getDividedByFive() {
    dividedByFive = dividedByFive.filter(item => item % 5 === 0)
    return dividedByFive;
};
console.log('Діляться на ціло на 5:', getDividedByFive());

// 8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
let yourStr = "Are you fucking kidding? It's bullshit!"

const badWords = /fuck|shit/g;
const replaceBadWords = (badWords) => {
    
    return yourStr.replaceAll(badWords, "***");
};
console.log(replaceBadWords(badWords));



// 9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. 

let yourStringe = "Commander Command";

const divideByThree = () => {
    yourStringe = yourStringe.split(' ').join('').toLowerCase();
    return yourStringe.match(/.{1,3}/g);
};
console.log(divideByThree());



// 10. Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові.



