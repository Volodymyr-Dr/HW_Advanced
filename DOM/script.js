
const generateBlocksInterval = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


const generateBlocks = () =>  {
    
    for (let i = 0; i < 25; i++) {
        const square = document.createElement('div')
        square.style.background = generateBlocksInterval()
        
        document.body.prepend(square)
    }   
}
generateBlocks()


const getQuerySelector = () => {
    const boxex = document.querySelectorAll('div')
    for ( let box of boxex ) {
        box.style.background = generateBlocksInterval()
    }    
}

setInterval(() => { 
    getQuerySelector()
}, 1000); 





