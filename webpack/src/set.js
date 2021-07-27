// HW 1

import { divide } from "lodash";

export function getMaxNumber (priceForCake, priceForSteak, priceForWiskey) {
    return  Math.max(priceForCake, priceForSteak, priceForWiskey);
    ;
}

// HW 2 

export function getSum (number1, number2) {
    const minNumber = Math.min(number1, number2);
    const maxNumber = Math.max(number1, number2);

    let sum = 0;
    for(let i = minNumber; i <= maxNumber; i++) {
        sum += i
    }
    return sum;
}

// HW 3 

export function genPassword(lengthPassword){
    let password = "";
    let symbols = "0123456789";
    for (let i = 0; i < lengthPassword; i++){
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));     
    }
    return password;
}

// HW 4 

export function getPairs() {
    const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана",];
    return [[students[0], students[2]],[students[1], students[3]], [students[4], students[5]]];
}

// HW 5 

export function getEvenNumbers() {
    let allNumbers = [1, 2, 3, 4, 5, 6];
    return allNumbers.filter(item => !(item % 2 === 0));
} 

// HW 6 

export const calculateWordLetters = () => {
    let word = 'тест';
    const lettersCount = {}
    for (let i = 0; i < word.length; i++) {
        lettersCount[word[i]] ? lettersCount[word[i]] += 1 : lettersCount[word[i]] = 1
    }
    return lettersCount; 
  }

  // HW 7 

export const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476,
};

export function getMyTaxes (salyry) {
    const myTax = this.tax * salyry;
    return +myTax
}
export const taxes = getMyTaxes.call(ukraine, 5000)

// HW 8

export class Student {
    constructor (university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.dismissed = false;
    }
    get getInfo() {
        return `Студент ${this.course} курсу ${this.university}, ${this.fullName} `
    }
}
export const volodymyr = new Student("Вищої Школи Психотерапії м.Львів", "3", "Павлик Володимир Сергійович", [4, 5, 4, 4, 5]);
export const infoStudent = volodymyr.getInfo;

// HW 9 

export const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// HW 10 


// HW 11 

export async function getRandomChinese(length) {
    let sign = '';
     
     for(let i = 0; i < length; i++) {
       const promise = new Promise ((resolve) => {
         setTimeout(() => {
           sign = String.fromCharCode(Date.now() % 100000);
           resolve(sign);
         }, 50 * i);
       })
       sign += await promise;
     }
    return sign;
}

// HW 13 

export async function getPlanets () { 
    
    document.body.insertAdjacentHTML("afterbegin", `<div id="title"><p>Planets</p></div>`);
    document.body.insertAdjacentHTML("afterbegin", `<p class = "hw">HW 13. Others, look console.</p>`);

    const planetsInfo = await (await fetch(`https://swapi.dev/api/planets/`)).json();
    
    const planetsArr = planetsInfo.results;
    
  planetsArr.map(planet => {
    let planetImg = planet.name;
     
    document.body.insertAdjacentHTML("beforeend", `<div id="planets"><span>${planetImg}</span></div>`)
  } )

}

// HW 14

export function* createIdGenerator() {
    let i = 1;
    while (true) {
        yield i ++
    }
}
export const idGenerator = createIdGenerator();
export const value = idGenerator.next().value





