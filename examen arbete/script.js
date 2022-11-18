// Variabler
const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';

let planets;
let planetInfo;

const first = document.querySelector(`.First`)
const second = document.querySelector(`.Second`)
const figurePlanets = document.querySelectorAll(`figure`);



//Hämta API Nyckel Och Returnerar
async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const data = await response.json(); 
    
}

async function getPlanets() {
    const response = await fetch(`${BASE_URL}/bodies`, {
        method: "GET",
        headers: {
            'x-zocom': 'solaris-4wOFSa0vV0WtlFYK' //  key
        }
    });
    
    const data = await response.json();
    planets = data.bodies
    console.log(data);
    console.log(planets)
}
    async function runCode(){

    await getKey();
    await getPlanets()
    }







    
  runCode()
    figurePlanets.forEach((figurePlanets, index) => {
        figurePlanets.addEventListener('click', (e) => {
            const clickedPlanet =  planets[index]
            console.log(index)
            createArticle(clickedPlanet)
            second.style.display = `flex`  
            first.style.display = `none`

        })
    })   





    // Skapa / Hämta info från API, Skapar p,buttton,article,figure och h element

    function createArticle(planets){

    second.innerHTML = ``;
    let planetInfo = `<article  class="${planets.name}">
    <h1 class="headerA">${planets.name}</h1>
    <h6 class="headerB">${planets.latinName}</h6>



    <p>${planets.desc}</p><br>
        <aside>
        <p class="circumference"><span style='font-weight:bold'>Omkrets</span><br> ${planets.circumference}</p>
        <p class="fromSun"><span style='font-weight:bold'>Kilometer från solen </span><br> ${planets.distance} km</p>
        <p><span style='font-weight:bold'>Max temperatur</span><br> ${planets.temp.day}</p><p class="minTemp" ><span style='font-weight:bold'>Min temperatur</span><br> ${planets.temp.night}</p>
        </aside>
    
    
    <div class="moons"> <span style='font-weight:bold'>Månar </span> <br> ${planets.moons.join(' ')} </div>
    <button class="buttonBack">Back</button>
   
    

    <figure class="blueSun"></figure>
    <figure class="blueSunLight"></figure>
    <figure class="blueSunLighter"></figure> 
    </article> `
 
    second.insertAdjacentHTML(`beforeend`, planetInfo)
    backToPlanets()

    }



    //KNAPP FÖR ATT GÅ TILBAKA TILL FÖRSTA SIDAN
function backToPlanets(){
    const backBtn = document.querySelector(`.buttonBack`)
    backBtn.addEventListener(`click`, function(){
        second.style.display = `none`  
        first.style.display = `flex`
    })
}

