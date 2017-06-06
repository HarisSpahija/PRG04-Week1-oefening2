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


//
// start the game on window load
//


var number = 50; //amount of fish && bubbles
var counter = 0;

window.addEventListener("load", function () {
    startScreen();
});

      



function startGame(){

        //rand for fish
        var rand1 = Math.floor((Math.random() * screen.width) + 1);
        var rand2 = Math.floor((Math.random() * screen.height) + 1);
        var rand3 = Math.floor((Math.random() * screen.width) + 1);

        //rand for color
        var rand4 = Math.floor((Math.random() * 720) - 360);
        var rand5 = Math.floor((Math.random() * 720) - 360);


        //console.log(rand1, rand2, rand3);
        //Check if 40 fish are placed    
        if (counter == number){
        clearInterval(game);
    }
    
    createFish(rand1, rand2, rand4, rand5); 
    createBubble(rand3);
    counter += 1;
    
}
//Startscreen
function startScreen() {
    startTitle();
    startButton();
    startBubble();
}
//Create Title
function startTitle() {
    var startTitle = document.createElement("startTitle");
    document.body.appendChild(startTitle);
}
//Create Button
function startButton() {
    var startButton = document.createElement("startButton");
    document.body.appendChild(startButton);

    //Start game, remove button and move title up upon click
    startButton.addEventListener("click", function(){
        var game = setInterval(startGame, 100);
        startButton.style.display = 'none';
        document.getElementsByClassName("startTitle").style.backgroundPosition = "top center";

});

}
//Create Start Bubble
function startBubble() {
    var bubble = document.createElement("bubble");
    document.body.appendChild(bubble);
    bubble.style.left = "90%";
    bubble.style.top = "0px";
}
//Create Fish    
function createFish(rand1, rand2, rand4, rand5){
    var fish = document.createElement("fish");
    document.body.appendChild(fish);
    // demo code : verander basis positie
    fish.style.left = rand1 + "px";
    fish.style.top = rand2 + "px";
    // demo code : verander kleur
    fish.style.webkitFilter = "hue-rotate(350deg)";
    fish.style.filter = "hue-rotate(301deg)";
    //Kill a fish
    fish.addEventListener("click", function () {
    fish.classList.add("deadfish");
    });
    }

//Create Bubble
function createBubble(rand3){
    var bubble = document.createElement("bubble");
    document.body.appendChild(bubble);
     // demo code : verander basis positie
    bubble.style.left = rand3 + "px";
    bubble.style.top = "0px"; 
    //console.log("bubble created" + i);
    }   
    

