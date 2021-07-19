
const images = [{
    name: "Luke Skywalker",
    image: `<img src="../characters/Luke-rotjpromo.jpeg" alt="">`,
},
{
    name: "C-3PO",
    image: `<img src="../characters/C-3PO_EP3.png" alt="">`,
},
{
    name: "R2-D2",
    image: `<img src="../characters/r2.png" alt="">`,
},
{
    name: "Darth Vader",
    image: `<img src="../characters/newsimg78438.jpeg" alt="">`,
},
{
    name: "Leia Organa",
    image: `<img src="../characters/star-wars-leia.jpeg" alt="">`,
},
{
    name: "Owen Lars",
    image: `<img src="../characters/Owen-OP.jpeg" alt="">`,
},
{
    name: "Beru Whitesun lars",
    image: `<img src="../characters/Beru_Lars_002.jpeg" alt="">`,
},
{
    name: "R5-D4",
    image: `<img src="../characters/R5-D4_Sideshow.png" alt="">`,
},
{
    name: "Biggs Darklighter",
    image: `<img src="../characters/BiggsHS-ANH.png" alt="">`,
},
{
    name: "Obi-Wan Kenobi",
    image: `<img src="../characters/010_A7A08C89_416.jpeg" alt="">`
},
{
    name: "Wilhuff Tarkin",
    image: `<img src="../characters/Tarkininfobox.jpeg" alt="">`,
},
{
    name: "Chewbacca",
    image: `<img src="../characters/9084590.jpeg" alt="">`,
},
{
    name: "Han Solo",
    image: `<img src="../characters/HanSolo.jpeg" alt="">`,
},
{
    name: "Greedo",
    image: `<img src="../characters/Greedo.jpeg" alt="">`,
},
{
    name: "Jabba Desilijic Tiure",
    image: `<img src="../characters/Hutt.jpeg" alt="">`,
},
{
    name: "Wedge Antilles",
    image: `<img src="../characters/WedgesEntireHead-ROTJ.png" alt="">`,
},
{
    name: "Jek Tono Porkins",
    image: `<img src="../characters/JekPorkins-DB.png" alt="">`,
},
{
    name: "Raymus Antilles",
    image: `<img src="../characters/Antilles-SWE.png" alt="">`,
},
{
    name: "Yoda",
    image: `<img src="https://static.wikia.nocookie.net/rustarwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20171222112613" alt="">`,
},
{
    name: "Palpatine",
    image: `<img src="https://static.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png/revision/latest?cb=20130620100935" alt="">`,
},
{
    name: "Boba Fett",
    image: `<img src="https://i.pinimg.com/originals/65/a3/53/65a3531b5ed9647d9ffb99757a5a88d0.png" alt="">`,
},
{
    name: "IG-88",
    image: `<img src="https://bunker158.com/wp-content/uploads/2018/09/IG88-Droide-Gentle-Giant-Star-Wars-2.jpg" alt="">`,
}, 
{
    name: "Bossk",
    image: `<img src="https://static.wikia.nocookie.net/esstarwars/images/1/1d/Bossk.png/revision/latest?cb=20160801155607" alt="">`,
},
{
    name: "Lando Calrissian",
    image: `<img src="https://static.wikia.nocookie.net/rustarwars/images/7/7d/Lando_WoSW.jpg/revision/latest?cb=20140413082859" alt="">`,
},
{
    name: "Lobot",
    image: `<img src="https://pbs.twimg.com/media/A7dWWM8CIAAX5Te.jpg" alt="">`,
},
{
    name: "Ackbar",
    image: `<img src="https://static.wikia.nocookie.net/rustarwars/images/c/cd/Gial_Ackbar_Resistance.jpg/revision/latest/top-crop/width/360/height/450?cb=20160214133345" alt="">`,
},
{
    name: "Mon Mothma",
    image: `<img src="https://static.wikia.nocookie.net/rustarwars/images/4/46/Monmothma.jpg/revision/latest?cb=20160520030854" alt="">`,
},
{
    name: "Arvel Crynyd",
    image: `<img src="http://ayay.co.uk/backgrounds/star_wars/rebel_alliance_characters/arvel-crynyd.jpg" alt="">`,
},
{
    name: "Wicket Systri Warrick",
    image: `<img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Wicket_W_Warrick.png/220px-Wicket_W_Warrick.png" alt="">`,
},
{
    name: "Nien Nunb",
    image: `<img src="https://i.pinimg.com/236x/92/c3/df/92c3df63709c6b881a21ca7235833790--star-wars-quilt-star-wars-stuff.jpg" alt="">`,
},
{
    name: "Bib Fortuna",
    image: `<img src="https://outerrimnews.com/wp-content/uploads/2017/12/Gentle-Giant-Star-Wars-Bib-Fortuna-Bust-012.jpg" alt="">`,
},
{
    name: "Anakin Skywalker",
    image: `<img src="https://static.wikia.nocookie.net/starwars/images/1/11/%D0%90%D0%BD%D0%B0%D0%BA%D0%B8%D0%BD_%D0%A1.jpg/revision/latest?cb=20140831184534&path-prefix=mn" alt="">`,
},
{
    name: "Qui-Gon Jinn",
    image: `<img src="https://static.wikia.nocookie.net/rustarwars/images/f/f6/Qui-Gon_Jinn_Headshot_TPM.jpg/revision/latest?cb=20180519192129" alt="">`,
},
{
    name: "Nute Gunray",
    image: `<img src="https://i.pinimg.com/originals/69/b6/c9/69b6c9feb9742af1be98a22de6c9b250.jpg" alt="">`,
},
{
    name: "Finis Valorum",
    image: `<img src="https://i.pinimg.com/originals/29/16/62/29166227119bf6376119c9d89c3d88c7.jpg" alt="">`,
},
{
    name: "Padmé Amidala",
    image: `<img src="https://static.wikia.nocookie.net/frstarwars/images/3/3f/Padm%C3%A9_Amidala.jpg/revision/latest?cb=20150701092402" alt="">`,
},
{
    name: "Jar Jar Binks",
    image: `<img src="https://static.wikia.nocookie.net/starwars/images/0/02/Jar_Jar_SWSB.png/revision/latest?cb=20160910034613" alt="">`,
},
{
    name: "Roos Tarpals",
    image: `<img src="https://static.wikia.nocookie.net/ptstarwars/images/8/86/Tarpals.jpg/revision/latest?cb=20100108212048" alt="">`,
},
{
    name: "Rugor Nass",
    image: `<img src="https://i.pinimg.com/originals/f2/ed/a2/f2eda28291597c0fd06db49d6628059e.jpg" alt="">`,
},
{
    name: "Watto",
    image: `<img src="https://static.wikia.nocookie.net/starwars/images/e/eb/WattoHS.jpg/revision/latest?cb=20081222024729" alt="">`,
},
{
    name: "Shmi Skywalker",
    image: `<img src="https://static.wikia.nocookie.net/rustarwars/images/9/98/ShmiSkywalkerDatabank_%28Repurposed%29.jpg/revision/latest?cb=20171111104112" alt="">`,
},
{
    name: "Ayla Secura",
    image: `<img src="https://static.wikia.nocookie.net/rustarwars/images/4/4d/Aayla_Secura_SWE.png/revision/latest?cb=20140928195056" alt="">`,
},
{
    name: "Mace Windu",
    image: `<img src="https://static.wikia.nocookie.net/rustarwars/images/a/a9/MaceKorun.jpg/revision/latest?cb=20080309172908" alt="">`,
},
{
    name: "Ki-Adi-Mundi",
    image: `<img src="https://static.wikia.nocookie.net/starwars/images/6/6d/KiAdiMundi-SWCT.png/revision/latest?cb=20200807031541" alt="">`,
},
{
    name: "Kit Fisto",
    image: `<img src="https://static.wikia.nocookie.net/disney/images/3/36/Kit-Fisto_profile.jpg/revision/latest?cb=20191023211616" alt="">`,
}];
    


const planetObj = [{
    planet: "Tatooine",
    image: `<img  class="planet" src="https://static.wikia.nocookie.net/swtor/images/7/7f/Tatooine.jpg/revision/latest?cb=20190412125545&path-prefix=ru" alt=""></img>`,
},
{
    planet: "Alderaan",
    image: `<img class="planet" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4a/Alderaan.jpg?width=960" alt=""></img>`,
},
{
    planet: "Yavin IV",
    image: `<img class="planet" src="https://static.wikia.nocookie.net/starwars/images/9/99/Yavin-Battlefront.png/revision/latest?cb=20170911200018" alt=""></img>`,
},
{
    planet: "Hoth",
    image: `<img class="planet" src="https://static.wikia.nocookie.net/rustarwars/images/8/81/Hoth_AoRCR.png/revision/latest?cb=20180110123742" alt=""></img>`,
},
{
    planet: "Dagobah",
    image: `<img class="planet" src="https://static.wikia.nocookie.net/starwars/images/4/48/Dagobah_ep3.jpg/revision/latest?cb=20100122163146" alt=""></img>`,
},
{
    planet: "Bespin",
    image: `<img class="planet" src="https://static.wikia.nocookie.net/rustarwars/images/7/79/Bestine_TEA.png/revision/latest?cb=20180326092431" alt=""></img>`,
},
{
    planet: "Endor",
    image: `<img class="planet" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/2/20/Endor1.jpg?width=960" alt=""></img>`,
},
{
    planet: "Naboo",
    image: `<img class="planet" src="https://static.wikia.nocookie.net/starwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20190210065915" alt=""></img>`
},
{
    planet: "Coruscant",
    image: `<img class="planet" src="https://static.wikia.nocookie.net/starwars/images/8/84/CoruscantGlobeE1.png/revision/latest?cb=20130123002137" alt=""></img>`
},
{
    planet: "Kamino",
    image: `<img class="planet" src="https://static.wikia.nocookie.net/rustarwars/images/5/57/Kamino.jpg/revision/latest?cb=20081121172604" alt=""></img>`,
}]
