# PRG04 Week1 oefening 2

## Pixel Aquarium

### OPDRACHT
- Verwijder de fish en bubble uit de html file
- Voeg via javascript een vis en een bubble toe
```
element = document.createElement(tagname)
document.body.appendChild(element)
```
- Zet de vis op een willekeurige plek in het scherm met een willekeurige kleur
- Zet de bubble op een willekeurige x positie

### OPDRACHT
- Maak een for loop die 100 visjes en bubbles toevoegt. deze moeten allemaal anders zijn!

### OPDRACHT
- Gebruik nu setTimout of setInterval om nieuwe visjes en bubbles te plaatsen

### OPDRACHT
- Voeg een click event listener toe aan elk visje. als geklikt wordt
- Geef je de geklikte vis een nieuwe class die een andere achtergrond heeft 
- `element.addEventListener("click", function(){});`
- `element.classList.add("deadfish");`

### Links
- [Creating HTML elements with javascript](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [Adding CSS classes with javascript](https://developer.mozilla.org/en/docs/Web/API/Element/classList)
- [Timers in javascript](https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Timers)
- [Event Listeners](https://developer.mozilla.org/en-US/docs/Talk:DOM/element.addEventListener)
