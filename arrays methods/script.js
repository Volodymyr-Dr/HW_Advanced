// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 

const getRandomArray = ((length, min, max) => {
    length = 15;
    min = 0;
    max = 50;
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray[i] = [Math.floor(Math.random() * (max - min + 1)) + min];
    }
    return randomArray.join().split();
});
console.log(getRandomArray());

//
