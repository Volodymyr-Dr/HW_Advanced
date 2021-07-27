import _ from 'lodash';
import './style.css';

import * as homeworks from './set';

console.log(`Function from HW 1:`, homeworks.getMaxNumber(15, 123, 90)); 
console.log(`Function from HW 2:`, homeworks.getSum(1, 20));
console.log(`Function from HW 3:`, homeworks.genPassword(5));
console.log(`Function from HW 4:`, homeworks.getPairs());
console.log(`Function from HW 5:`, homeworks.getEvenNumbers());
console.log(`Function from HW 6:`, homeworks.calculateWordLetters());
console.log(`Function from HW 7:`, homeworks.taxes);
console.log(`Function from HW 8:`, homeworks.infoStudent);
console.log(`Function from HW 9:`, homeworks.generateRandomColor());
console.log(`Function from HW 11:`, homeworks.getRandomChinese(3));
homeworks.getPlanets() //HW 13
console.log(`Function from HW 14:`)
console.log(homeworks.idGenerator.next().value)
console.log(homeworks.idGenerator.next().value)
console.log(homeworks.idGenerator.next().value)