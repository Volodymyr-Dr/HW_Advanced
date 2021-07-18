async function getPlanets () {
    document.querySelector('ol').innerHTML = null

    const text = document.createElement('p')
    const title = document.getElementById('title');
    title.append(text)
    document.querySelector('p').innerHTML = "Planets:"

    const planetsInfo = await (await fetch('https://swapi.dev/api/planets')).json();
    const planetsArr = planetsInfo.results;
    for(let planet of planetsArr) {
        planet = planet.name 
        console.log(planet)
        if(planet === "Tatooine"){
            planet = planet + `<img  class="planet" src="https://static.wikia.nocookie.net/swtor/images/7/7f/Tatooine.jpg/revision/latest?cb=20190412125545&path-prefix=ru" alt=""></img>`
        }if(planet === "Alderaan"){
            planet = planet + `<img class="planet" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4a/Alderaan.jpg?width=960" alt=""></img>`
        }if(planet === "Yavin IV"){
            planet = planet + `<img class="planet" src="https://static.wikia.nocookie.net/starwars/images/9/99/Yavin-Battlefront.png/revision/latest?cb=20170911200018" alt=""></img>`
        }if(planet === "Hoth"){
            planet = planet + `<img class="planet" src="https://static.wikia.nocookie.net/rustarwars/images/8/81/Hoth_AoRCR.png/revision/latest?cb=20180110123742" alt=""></img>`
        }if(planet === "Dagobah"){
            planet = planet + `<img class="planet" src="https://static.wikia.nocookie.net/starwars/images/4/48/Dagobah_ep3.jpg/revision/latest?cb=20100122163146" alt=""></img>`
        }if(planet === "Bespin"){
            planet = planet + `<img class="planet" src="https://static.wikia.nocookie.net/rustarwars/images/7/79/Bestine_TEA.png/revision/latest?cb=20180326092431" alt=""></img>`
        }if(planet === "Endor"){
            planet = planet + `<img class="planet" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/2/20/Endor1.jpg?width=960" alt=""></img>`
        }if(planet === "Naboo"){
            planet = planet + `<img class="planet" src="https://static.wikia.nocookie.net/starwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20190210065915" alt=""></img>`
        }if(planet === "Coruscant"){
            planet = planet + `<img class="planet" src="https://static.wikia.nocookie.net/starwars/images/8/84/CoruscantGlobeE1.png/revision/latest?cb=20130123002137" alt=""></img>`
        }if(planet === "Kamino"){
            planet = planet + `<img class="planet" src="https://static.wikia.nocookie.net/rustarwars/images/5/57/Kamino.jpg/revision/latest?cb=20081121172604" alt=""></img>`
        }
        const elem = document.createElement('span');
        const ol = document.getElementById('planets')
        ol.prepend(elem);
        document.querySelector('span').innerHTML = `${planet}`;

    }
}


const getButtonGetPlanets = document.getElementById('getplanets');
getButtonGetPlanets.onclick = getPlanets;

const getButtonBack = document.getElementById('back');
    getButtonBack.addEventListener('click', () => {
        window.location.href = 'index.html';
    })