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
console.log(fontGenerator.next('up').value)
console.log(fontGenerator.next('up').value)
console.log(fontGenerator.next('up').value)
console.log(fontGenerator.next().value)
console.log(fontGenerator.next('down').value)
console.log(fontGenerator.next('down').value)
console.log(fontGenerator.next('down').value)
console.log(fontGenerator.next().value)





