const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    }
  }];


// 1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. 
//    Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

  const arrWithSubjects = students.map((student) =>    {
    const subjects = Object.keys(student.subjects);
    const formattedSubjects = subjects.map((subject) => {
      let changedSubject = subject.replace(/_/g, " ");
      changedSubject = subject.charAt(0).toUpperCase() + subject.substring(1).toLowerCase();
      return changedSubject;
    });

    return formattedSubjects;
});
console.log(arrWithSubjects);

// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
//  Оцінку округліть до 2ого знаку. 


const averageMark = students.map( student =>  {
  const allMarks = Object.values(student.subjects).join(',').split (',');
  const total = allMarks.reduce((total, mark)  => {
    return total + Number(mark);
  }, 0);
  return +(total / allMarks.length).toFixed(2);
});
console.log(averageMark)

// 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} –
//  яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). 
// ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.

const arrInfo = students.map(student =>    {
  const studInfo = Object.entries(student).splice(0, 2);
  return studInfo;
}); 

function getStudentInfo() {
  let studentInfo = {};
  for ( let i = 0; i < arrInfo.length; i++ ) {
    studentInfo[arrInfo[i]] =+ averageMark[i]; 
  }
  return Object.entries(studentInfo);
}
console.log(getStudentInfo())




 
// 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

const getStudentsNames = students.map( student => {
  const studentsName = Object.values(student.name).join('');

  return studentsName;
});
console.log(getStudentsNames.sort())

// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

const marksStudents = averageMark.map( mark => {
  const onlyMark = Object.values(mark);
  return onlyMark
}); function getMaxOfArray(marksStudents) {
  return  Math.max(...marksStudents);
}
console.log(getMaxOfArray(marksStudents))

// 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
const word = 'тест';

const calculateWordLetters = (...word) => {
  const lettersCount = {}
  for (let i = 0; i < word.length; i++) {
      lettersCount[word[i]] ? lettersCount[word[i]] += 1 : lettersCount[word[i]] = 1
  }
  return lettersCount;
  
}
console.log(calculateWordLetters(...word));
