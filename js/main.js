//
// OPDRACHT
//
// VERWIJDER DE FISH EN BUBBLE UIT DE HTML FILE
// VOEG VIA JAVASCRIPT EEN VIS EN EEN BUBBLE TOE
// document.createElement(tagName)
// document.body.appendChild(element)

// ZET DE VIS OP EEN WILLEKEURIGE PLEK IN HET SCHERM MET EEN WILLEKEURIGE KLEUR
// ZET DE BUBBLE OP EEN WILLEKEURIGE X POSITIE

//
// OPDRACHT
//
// MAAK EEN FOR LOOP DIE 100 VISJES EN BUBBLES TOEVOEGT. DEZE MOETEN ALLEMAAL ANDERS ZIJN!

//
// OPDRACHT
//
// GEBRUIK NU SETTIMOUT OF SETINTERVAL OM NIEUWE VISJES EN BUBBLES TE PLAATSEN

//
// OPDRACHT
//
// PLAATS EEN TITEL EN START KNOP. ALS JE OP START KLIKT VERDWIJNEN DE TITEL EN KNOP, EN 
// DAARNA WORDEN PAS DE VISJES GETEKEND

//
// OPDRACHT
//
// VOEG EEN CLICK EVENT LISTENER TOE AAN ELK VISJE. ALS GEKLIKT WORDT
// GEEF JE DE GEKLIKTE VIS EEN NIEUWE CLASS DIE EEN ANDERE ACHTERGROND HEEFT 
// element.addEventListener("click", function(){});
// element.classList.add(".deadfish");


function startGame(){
    var fish = document.getElementsByTagName("fish")[0];

    // demo code : verander basis positie
    fish.style.left = "150px";
    fish.style.top = "150px";

    // demo code : verander kleur
    fish.style.webkitFilter = "hue-rotate(45deg)";
    fish.style.filter = "hue-rotate(45deg)";

    // demo code : verander basis positie
    var bubble = document.getElementsByTagName("bubble")[0];
    bubble.style.left = "60px";
    bubble.style.top = "0px";
}

//
// start the game on window load
//

window.addEventListener("load", function () {
    startGame();
});
