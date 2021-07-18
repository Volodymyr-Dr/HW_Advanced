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
        if(characterInfo.gender === "male") {
            characterInfo.gender = '&#9794;'
        }if(characterInfo.gender === "female") {
            characterInfo.gender = '&#9792;'
        }if(characterInfo.gender === "hermaphrodite") {
            characterInfo.gender = '&#9791;'
        }if(characterInfo.name === "Luke Skywalker"){
            characterInfo.photo = `<img src="./characters/Luke-rotjpromo.jpeg" alt="">`
        }if(characterInfo.name === "C-3PO"){
            characterInfo.photo = `<img src="./characters/C-3PO_EP3.png" alt="">`
        }if(characterInfo.name === "R2-D2"){
            characterInfo.photo = `<img src="./characters/r2.png" alt="">`
        }if(characterInfo.name === "Darth Vader"){
            characterInfo.photo = `<img src="./characters/newsimg78438.jpeg" alt="">`
        }if(characterInfo.name === "Leia Organa"){
            characterInfo.photo = `<img src="./characters/star-wars-leia.jpeg" alt="">`
        }if(characterInfo.name === "Owen Lars"){
            characterInfo.photo = `<img src="./characters/Owen-OP.jpeg" alt="">`
        }if(characterInfo.name === "Beru Whitesun lars"){
            characterInfo.photo = `<img src="./characters/Beru_Lars_002.jpeg" alt="">`
        }if(characterInfo.name === "R5-D4"){
            characterInfo.photo = `<img src="./characters/R5-D4_Sideshow.png" alt="">`
        }if(characterInfo.name === "Biggs Darklighter"){
            characterInfo.photo = `<img src="./characters/BiggsHS-ANH.png" alt="">`
        }if(characterInfo.name === "Obi-Wan Kenobi"){
            characterInfo.photo = `<img src="./characters/010_A7A08C89_416.jpeg" alt="">`
        }if(characterInfo.name === "Wilhuff Tarkin"){
            characterInfo.photo = `<img src="./characters/Tarkininfobox.jpeg" alt="">`
        }if(characterInfo.name === "Chewbacca"){
            characterInfo.photo = `<img src="./characters/9084590.jpeg" alt="">`
        }if(characterInfo.name === "Han Solo"){
            characterInfo.photo = `<img src="./characters/HanSolo.jpeg" alt="">`
        }if(characterInfo.name === "Greedo"){
            characterInfo.photo = `<img src="./characters/Greedo.jpeg" alt="">`
        }if(characterInfo.name === "Jabba Desilijic Tiure"){
            characterInfo.photo = `<img src="./characters/Hutt.jpeg" alt="">`
        }if(characterInfo.name === "Wedge Antilles"){
            characterInfo.photo = `<img src="./characters/WedgesEntireHead-ROTJ.png" alt="">`
        }if(characterInfo.name === "Jek Tono Porkins"){
            characterInfo.photo = `<img src="./characters/JekPorkins-DB.png" alt="">`
        }if(characterInfo.name === "Raymus Antilles"){
            characterInfo.photo = `<img src="./characters/Antilles-SWE.png" alt="">`
        }if(characterInfo.name === "Yoda"){
            characterInfo.photo = `<img src="https://static.wikia.nocookie.net/rustarwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20171222112613" alt="">`
        }if(characterInfo.name === "Palpatine"){
            characterInfo.photo = `<img src="https://static.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png/revision/latest?cb=20130620100935" alt="">`
        }if(characterInfo.name === "Boba Fett"){
            characterInfo.photo = `<img src="https://i.pinimg.com/originals/65/a3/53/65a3531b5ed9647d9ffb99757a5a88d0.png" alt="">`
        }if(characterInfo.name === "IG-88"){
            characterInfo.photo = `<img src="https://bunker158.com/wp-content/uploads/2018/09/IG88-Droide-Gentle-Giant-Star-Wars-2.jpg" alt="">`
        }if(characterInfo.name === "Bossk"){
            characterInfo.photo = `<img src="https://static.wikia.nocookie.net/esstarwars/images/1/1d/Bossk.png/revision/latest?cb=20160801155607" alt="">`
        }if(characterInfo.name === "Lando Calrissian"){
            characterInfo.photo = `<img src="https://static.wikia.nocookie.net/rustarwars/images/7/7d/Lando_WoSW.jpg/revision/latest?cb=20140413082859" alt="">`
        }if(characterInfo.name === "Lobot"){
            characterInfo.photo = `<img src="https://pbs.twimg.com/media/A7dWWM8CIAAX5Te.jpg" alt="">`
        }if(characterInfo.name === "Ackbar"){
            characterInfo.photo = `<img src="https://static.wikia.nocookie.net/rustarwars/images/c/cd/Gial_Ackbar_Resistance.jpg/revision/latest/top-crop/width/360/height/450?cb=20160214133345" alt="">`
        }if(characterInfo.name === "Mon Mothma"){
            characterInfo.photo = `<img src="https://static.wikia.nocookie.net/rustarwars/images/4/46/Monmothma.jpg/revision/latest?cb=20160520030854" alt="">`
        }if(characterInfo.name === "Arvel Crynyd"){
            characterInfo.photo = `<img src="http://ayay.co.uk/backgrounds/star_wars/rebel_alliance_characters/arvel-crynyd.jpg" alt="">`
        }if(characterInfo.name === "Wicket Systri Warrick"){
            characterInfo.photo = `<img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Wicket_W_Warrick.png/220px-Wicket_W_Warrick.png" alt="">`
        }if(characterInfo.name === "Nien Nunb"){
            characterInfo.photo = `<img src="https://i.pinimg.com/236x/92/c3/df/92c3df63709c6b881a21ca7235833790--star-wars-quilt-star-wars-stuff.jpg" alt="">`
        }if(characterInfo.name === "Bib Fortuna"){
            characterInfo.photo = `<img src="https://outerrimnews.com/wp-content/uploads/2017/12/Gentle-Giant-Star-Wars-Bib-Fortuna-Bust-012.jpg" alt="">`
        }if(characterInfo.name === "Anakin Skywalker"){
            characterInfo.photo = `<img src="https://static.wikia.nocookie.net/starwars/images/1/11/%D0%90%D0%BD%D0%B0%D0%BA%D0%B8%D0%BD_%D0%A1.jpg/revision/latest?cb=20140831184534&path-prefix=mn" alt="">`
        }if(characterInfo.name === "Qui-Gon Jinn"){
            characterInfo.photo = `<img src="https://static.wikia.nocookie.net/rustarwars/images/f/f6/Qui-Gon_Jinn_Headshot_TPM.jpg/revision/latest?cb=20180519192129" alt="">`
        }if(characterInfo.name === "Nute Gunray"){
            characterInfo.photo = `<img src="https://i.pinimg.com/originals/69/b6/c9/69b6c9feb9742af1be98a22de6c9b250.jpg" alt="">`
        }if(characterInfo.name === "Finis Valorum"){
            characterInfo.photo = `<img src="https://i.pinimg.com/originals/29/16/62/29166227119bf6376119c9d89c3d88c7.jpg" alt="">`
        }if(characterInfo.name === "Padmé Amidala"){
            characterInfo.photo = `<img src="https://static.wikia.nocookie.net/frstarwars/images/3/3f/Padm%C3%A9_Amidala.jpg/revision/latest?cb=20150701092402" alt="">`
        }if(characterInfo.name === "Jar Jar Binks"){
            characterInfo.photo = `<img src="https://static.wikia.nocookie.net/starwars/images/0/02/Jar_Jar_SWSB.png/revision/latest?cb=20160910034613" alt="">`
        }if(characterInfo.name === "Roos Tarpals"){
            characterInfo.photo = `<img src="https://static.wikia.nocookie.net/ptstarwars/images/8/86/Tarpals.jpg/revision/latest?cb=20100108212048" alt="">`
        }if(characterInfo.name === "Rugor Nass"){
            characterInfo.photo = `<img src="https://i.pinimg.com/originals/f2/ed/a2/f2eda28291597c0fd06db49d6628059e.jpg" alt="">`
        }if(characterInfo.name === "Watto"){
            characterInfo.photo = `<img src="https://static.wikia.nocookie.net/starwars/images/e/eb/WattoHS.jpg/revision/latest?cb=20081222024729" alt="">`
        }if(characterInfo.name === "Shmi Skywalker"){
            characterInfo.photo = `<img src="https://static.wikia.nocookie.net/rustarwars/images/9/98/ShmiSkywalkerDatabank_%28Repurposed%29.jpg/revision/latest?cb=20171111104112" alt="">`
        }if(characterInfo.name === "Ayla Secura"){
            characterInfo.photo = `<img src="https://static.wikia.nocookie.net/rustarwars/images/4/4d/Aayla_Secura_SWE.png/revision/latest?cb=20140928195056" alt="">`
        }if(characterInfo.name === "Mace Windu"){
            characterInfo.photo = `<img src="https://static.wikia.nocookie.net/rustarwars/images/a/a9/MaceKorun.jpg/revision/latest?cb=20080309172908" alt="">`
        }if(characterInfo.name === "Ki-Adi-Mundi"){
            characterInfo.photo = `<img src="https://static.wikia.nocookie.net/starwars/images/6/6d/KiAdiMundi-SWCT.png/revision/latest?cb=20200807031541" alt="">`
        }if(characterInfo.name === "Kit Fisto"){
            characterInfo.photo = `<img src="https://static.wikia.nocookie.net/disney/images/3/36/Kit-Fisto_profile.jpg/revision/latest?cb=20191023211616" alt="">`
        }
        
        
        const hero = (Object.values(characterInfo)).join('<br> ');
        // console.log(hero);
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






