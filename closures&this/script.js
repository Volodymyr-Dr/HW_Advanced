const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476,
};
const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921,
};
const litva = { 
    tax: 0.15, 
    middleSalary: 1509,
    vacancies: 1114,
    };

// 1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.

function getMyTaxes (country, salyry) {
    console.log (`Як IT-спеціаліст з ${salyry}$ зп в ${country} платитимеш ${this.tax * salyry}$ податку.`)
}

getMyTaxes.call(ukraine, 'Україні' , 3000)

// 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). 

function getMiddleTaxes (country) {
    console.log(`В ${country}, при середній зп ${this.middleSalary}$ платитимеш в середньому ${(this.middleSalary * this.tax).toFixed(2)}$ податку.`)
}  

getMiddleTaxes.call(ukraine, 'Україні')

// 3.Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).

function getTotalTaxes (country) {
   console.log(`Занальна сума податків IT-спеціалістів в ${country} = ${this.tax * this.middleSalary * this.vacancies}$`)
}

getTotalTaxes.call(ukraine, 'Україні')

// 4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. 
// Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.

function getMySalary(country) {
    const maxSalary = 2000;
    const minSalary = 1500;
    const salary =  Math.floor(Math.random() * (maxSalary - minSalary)) + minSalary;
    const taxes = this.tax * salary;
    const profit = +(salary - (salary * this.tax)).toFixed(2);
    
    console.log(`${country}:`, {salary: salary, taxes: taxes, profit: profit});
    
};

getMySalary.call(ukraine ,'Україна');

let timerId = setTimeout(function getCountry() {
    getMySalary.call(ukraine ,'Україна');
    timerId = setTimeout(getCountry, 10000);
},10000);

