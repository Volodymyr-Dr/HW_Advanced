const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана",];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних",];
const marks = [4, 5, 5, 3, 4, 5,];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. 

const getPairs = function(students) {
    return [[students[0], students[2]],[students[1], students[3]], [students[4], students[5]]];
}

const allPairs = getPairs(students);
console.log(allPairs);

// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.

const getPairsWithThemes = function(allPairs, themes) {
    let pairsAndThemes = [];
    for ( let i = 0; i < allPairs.length; i++) {
        pairsAndThemes[i] = [allPairs[i].join(' і '), themes[i]];
    }
    return pairsAndThemes;
}
const allThemesForPairs = getPairsWithThemes(allPairs, themes);
console.log(allThemesForPairs);

// 3. Зіставте оцінки(marks) зі студентом(students).

const getMarkForStudent = function(students, marks) {
    let marksOfStudents = [];
    for ( let i = 0; i < students.length;  i++) {
        marksOfStudents[i] = [students[i], marks[i]];
    }
    return marksOfStudents;
}
const allMarks = getMarkForStudent(students, marks);

console.log(allMarks)

// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив)

const getMarkForPair = function(allThemesForPairs) {

    const maxMark = 5;
    const minMark = 2

    function randomMark() {
        return Math.floor(Math.random() * (maxMark - minMark + 1)) + minMark;
    }
    
    let marksOfPairs = [];
    for ( let i = 0; i < allThemesForPairs.length; i++) {
        marksOfPairs[i] = [allThemesForPairs[i].join(','), randomMark()]
    }
    return marksOfPairs;
}

const allMarksOfPair = getMarkForPair(allThemesForPairs);
console.log(allMarksOfPair);

document.writeln(`1) Cьогодні працюємо в парах: <br> 1: ${allPairs[0]}; <br> 2: ${allPairs[1]}; <br> 3: ${allPairs[2]}; <br>`);
document.writeln(`2) Ваші завдання: <br> 1: ${allThemesForPairs[0]}; <br> 2: ${allThemesForPairs[1]}; <br> 3: ${allThemesForPairs[2]}; <br>`); 
document.writeln(`3) Індвідуальний бал: <br> ${allMarks[0]}; <br> ${allMarks[1]}; <br> ${allMarks[2]}; <br> ${allMarks[3]}; <br> ${allMarks[4]}; <br> ${allMarks[5]}; <br>`);
document.writeln(`4) Командний бал: <br> ${allMarksOfPair[0]}; <br> ${allMarksOfPair[1]}; <br> ${allMarksOfPair[2]}`);