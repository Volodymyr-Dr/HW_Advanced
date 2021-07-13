async function getRandomChinese(length) {
    let sign = '';
     
     for(let i = 0; i < length; i++) {
       const promise = new Promise ((resolve) => {
         setTimeout(() => {
           sign = String.fromCharCode(Date.now() % 100000);
           resolve(sign)
         }, 50 * i)
       })
       sign += await promise
     }
     alert(sign)
  }

const askLength = +prompt('Скільки симвалів хочете отримати', 3)

getRandomChinese(askLength)