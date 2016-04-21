//This is the array of strings

var characterAutomaticNames = [
    "Gunter Gabriel",
    "Adalbert Plüpf",
    "Hensel von Grätel",
    "Mork vom Ork",
    "Hannes Wader",
    "Irmtraut Kontrabass",
    "Donald Duck",
    "Franz Brantwein",
    "Otto Kolotto",
    "Ingmar Purzelbaum",
    "Jürgen von der Lippe",
    "Die Braut, die sich nicht traut",
    "Perter Lustig",
    "Johanna Brumborium",
    "Max Moritz",
    "Olga Trafalgar",
    "Astrid Kowalski",
    "Zitronen Jette",
    "Margarete Schreinemakers"
  ];

//--------------------------------------------------

// This is the random generator function
function randomNumber(range) {
  'use strict';
  if (typeof range === "number") {
    return Math.round(Math.random() * range);
  }
}

//--------------------------------------------------

// This is the random name generator function

function randomNameGenarator() {
  'use strict';
  randomRange = (characterAutomaticNames.length - 1);
  randomSelect = randomNumber(randomRange);
  randomName = characterAutomaticNames[randomSelect];
  character.name = randomName.toString();

  needCharacterText();
}

//--------------------------------------------------

// And this is  the first use of the random name

document.getElementById("textContent").textContent = character.name + ", in solchen Zeiten stehen dein Können und dein Charakter vor einer großen Prüfung.";

// Later in this program the next use

document.getElementById("headline").textContent = "Hi \"" + character.name + "\", schön, dass auch das jetzt geklärt ist.";

// ...and the next use

document.getElementById("headline").textContent = character.name + "Du bist tot.";


