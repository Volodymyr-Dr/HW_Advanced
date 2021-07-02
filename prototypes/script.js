class Student {
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

    get getMarks() {
        if (this.dismissed === true) {
            return null;
        }
        return this.marks;
    }

    set setMarks(mark) {
        if (this.dismissed === true) {
            return null;
        }
        return this.marks.push(mark);
    }

    getAverageMark() {
        const total = (this.marks).reduce((total, number)  => {
            return total + number;
        }, 0);
        return total /  (this.marks).length;  
    }
    
    dismiss() {
        this.dismissed = true;
    }
    
    recover() {
        this.dismissed = false;
    }

}


const ostap = new Student ("Вищої Школи Психотерапії м.Одеса", "1", "Остап Родоманський Бендер");

console.log("Інформація:" ,ostap.getInfo)

ostap.marks = [5, 4, 4, 5];
console.log('Бали:' ,ostap.getMarks)

ostap.setMarks = (4);
console.log('Оновлені бали:' ,ostap.marks);

console.log('Середній бал:' ,ostap.getAverageMark());

ostap.dismiss();
console.log('Бали:' ,ostap.getMarks);

ostap.recover();
console.log('Бали:' ,ostap.getMarks);


class BudgetStudent extends Student {
    constructor (university, course, fullName, marks) {
        super(university, course, fullName, marks)
        this.stipend = 1400;
        setInterval(() => console.log(this.getScholarship()), 30000);
        
    }
    getScholarship(stipend) {
        if (super.getAverageMark() >= 4 || !this.dismissed) {
            return `Ви отримали ${this.stipend}грн. стипендії`
        }
        else {
            return `Цього семестру без стипендії!`
        }
    }
    
}

const volodymyr = new BudgetStudent("Вищої Школи Психотерапії м.Одеса", "3", "Павлик Володимир Сергійович", [4, 5, 4, 4, 5]);

console.log(volodymyr.getScholarship())


