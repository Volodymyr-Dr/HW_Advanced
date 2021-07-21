function* createIdGenerator() {
    let i = 1;
    while (true) {
        yield i ++
    }
}
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)

const couter = document.querySelector('#generator')
const result = document.querySelector('#result')

couter.addEventListener('click', () => {
    result.innerHTML = idGenerator.next().value;
})

function* newFontGenerator(size) {
    
    let fontSize = size;

    while(true) {
       const arg = yield fontSize
       if (arg === 'up'){
            fontSize += 2;
       }else if (arg === 'down') {
            fontSize -= 2;
       }   
   }
}

const fontGenerator = newFontGenerator(14);

const buttonUp = document.querySelector('#up');
const buttonDown = document.querySelector('#down');
const text = document.getElementById('text')


buttonDown.addEventListener('click', () => {
    let fontSize = fontGenerator.next('down').value;
    if (fontSize >= 8) {
        text.style.fontSize = `${fontSize}px`
    }else {
        text.style.fontSize = `${8}px`
    }
    
})

buttonUp.addEventListener('click', () => {
    let fontSize = fontGenerator.next('up').value;
    if (fontSize <= 72) {
        text.style.fontSize = `${fontSize}px`
    }else {
        text.style.fontSize = `${72}px`
    }
    
})




