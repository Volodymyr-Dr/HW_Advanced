//змінні
let priceForCake = 15.678;
let priceForWiskey = 123.965;
let priceForSteak = 90.2345;

//виведіть максимальне число
let maxNumber = Math.max (priceForCake, priceForSteak, priceForWiskey);
console.log (maxNumber);

//виведіть мінімальне число
let minNumber = Math.min (priceForCake, priceForSteak, priceForWiskey);
console.log (minNumber);

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let fullSum = (priceForCake + priceForSteak + priceForWiskey);
console.log (fullSum);

//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою
let sumWithoutPennise = Math.trunc (priceForCake) + Math.trunc (priceForSteak) + Math.trunc (priceForWiskey);
console.log (sumWithoutPennise);

//Виведіть суму товарів округлену до сотень
let roundSum = Math.round (fullSum/100) * 100;
console.log (roundSum);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let chekingSum = Math.floor (fullSum) % 2 == 0;
console.log (chekingSum);

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
let remaiderSum = 500 - fullSum;
console.log (remaiderSum);

//Виведіть середнє значення цін, округлене до другого знаку після коми
let avarageSum = (fullSum/3).toFixed(2);
console.log(avarageSum);

//Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
let discount = (Math.random() * 100).toFixed();
console.log(discount);

let sumWithDiscount = (fullSum - ((discount * fullSum) / 100)).toFixed(2);
console.log(sumWithDiscount);

//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
let profit = (fullSum / 2).toFixed() - (fullSum - sumWithDiscount).toFixed();
console.log(profit);

//Створіть шаблонний рядок 

document.getElementById("counter").innerHTML = `

<ul>
    <li>Максимальна ціна: ${maxNumber};</li>
    <li>Мінімальна ціна: ${minNumber};</li>
    <li>Вартість всіх товарів: ${fullSum};</li>
    <li>Вартість всіх товарів без копійок: ${sumWithoutPennise};</li>
    <li>Округлена сума: ${roundSum};</li>
    <li>Булеве значення: ${chekingSum};</li>
    <li>Сума решти: ${remaiderSum}</li>
    <li>Cереднє значення цін: ${avarageSum}</li>
    <li>Знижка: ${discount}%;</li>
    <li>Cума зі знижкою: ${sumWithDiscount}</li>
    <li>Чистий прибуток: ${profit}</li>
</ul>
`
 