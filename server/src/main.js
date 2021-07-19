const input = document.querySelector('input')

async function getPeople () {
    document.querySelector('ol').innerHTML = null

    const text = document.createElement('p')
    const title = document.getElementById('title');
    title.append(text)
    document.querySelector('p').innerHTML = "Characters:" 

    const film = await (await fetch(`https://swapi.dev/api/films/${input.value}`)).json();
    const characters =  (film.characters);
    
    for (let character of characters) {
        character = await (await fetch(character)).json();
        const characterInfo = {
            "name": character.name,
            "birth_year": character.birth_year,
            "gender": character.gender
        }
        
        const image = images.find(item => item.name === character.name);
        if (image != undefined) {
            characterInfo.photo = image.image
        }else{
            characterInfo.photo = `<img class="planet" src="https://nevertoofar.co.uk/wp-content/uploads/2020/08/1596734485_Pandora-Star-Wars-Collection-The-Art-of-Pandora.jpg" alt=""></img>`;
        }
        
        
        if(characterInfo.gender === "male") {
            characterInfo.gender = '&#9794;'
        }
        if(characterInfo.gender === "female") {
            characterInfo.gender = '&#9792;'
        }
        
        const hero = (Object.values(characterInfo)).join('<br> ');
        const elem = document.createElement('span');
        const ol = document.getElementById('characters')
        ol.prepend(elem);
        document.querySelector('span').innerHTML = `${hero}`;


    }
}

const getButtonGetPeople = document.getElementById('getpeople');
getButtonGetPeople.onclick = getPeople;

const getButtonNext = document.getElementById('next');
    getButtonNext.addEventListener('click', () => {
        window.location.href = 'planets.html';
    }); 






