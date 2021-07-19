if (getPlanets != true) {
    document.getElementById('arrowLeft').style.opacity = 0;   
    document.getElementById('arrowRight').style.opacity = 0;
}else{}

async function getPlanets () {
    document.getElementById('arrowLeft').style.opacity = 1;   
    document.getElementById('arrowRight').style.opacity = 1;
    
    document.querySelector('ol').innerHTML = null

    const text = document.createElement('p')
    const title = document.getElementById('title');
    title.append(text)
    document.querySelector('p').innerHTML = "Planets:"

    const planetsInfo = await (await fetch(`https://swapi.dev/api/planets/?page=${page}`)).json();
    
    const planetsArr = planetsInfo.results;

  planetsArr.map(planet => {
      let planetImg = planetObj.find(item => item.planet === planet.name)
        if (planetImg === undefined) {
            planetImg = {
                planet: planet.name,
                image: `<img class="planet" src="https://i.pinimg.com/originals/be/6e/18/be6e18312e1a3e15d7af61092e3dc422.gif" alt=""></img>`,
            }
        }
        const planets = (Object.values(planetImg)).join('<br> ');
        const elem = document.createElement('span');
        const ol = document.getElementById('planets')
        ol.prepend(elem);
        document.querySelector('span').innerHTML = `${planets}`;
  } )

}

const getButtonGetPlanets = document.getElementById('getplanets');
getButtonGetPlanets.onclick = getPlanets;

const getButtonBack = document.getElementById('back');
getButtonBack.addEventListener('click', () => {
    window.location.href = 'index.html';
})

let page = 1; 

document.getElementById('arrowLeft').addEventListener("click", () => {
       
    page --
        
   if (page <= 1) {
        page = 1;
    }
    
    getPlanets()
})
    
document.getElementById('arrowRight').addEventListener("click", () => {
        
   page ++
        
    if (page >= 6) {
        page = 6;
    }
    
    getPlanets()
})

    

    
    
    