var outcome;

var beginningScenarios = [
    "Du erwachst in einem Krankenhaus. Um dich herum ist es ungewöhnlich still. Du schleichst auf Zehenspitzen zur Tür in der Erwartung, dass du von etwas schrecklichem überrascht wirst...",
    "Du wachst in einem dunklen Kelleraum auf. Du kannst weder Vogelgezitscher noch andere Stimmen hören. Außer einer großen Ansammlung von grunzenden Stöhnlauten in weiter Ferne. Du kannst nichts sehen, es ist stockfinster. Du tastest dich durch den Raum und findest eine Tür...",
    "Du stehst mitten auf einem weiten Feld. Bis an den Horizont ist nichts weiter zu sehen als Getreide, das sich kurz vor der Ernte befindet. Nur ein kleines weißes Haus unterbricht diese totale Einsamkeit. Du kämpfst dich durch das Feld und kommst zu dem Haus. Du du öffnest die Vordertür...",
    "Der Morgen graut. Es ist sehr kalt und du kommst zu dir von einem traumlosen Schlaf. Du fühlst dich völlig gerädert. Und du weißt jetzt auch wieso. Du hast in einer Gasse hinter einem Müllcontainer gelegen. Du stehst auf und willst herausfinden, wo diese einsame und sehr enge Gasse mündet....",
    "Dein Rücken schmerzt. Dein Kopf brummt. Du machst die Augen auf und blinzelst vor dich hin. Es ist fast stockfinster um dich herum. Das einzige Licht, das du wahrnimmst, ist der Mondschein, der ab und zu hinter Wolken verschwindet. So langsam realisierst du, wo du dich befindest. Du hast dein Auto anscheinend gegen einen Gegenstand gefahren. Der Kühler dampft noch und zischt, die Winschutzscheibe ist eingedrückt und in viele kleine Teile eingerissen. Du versuchst deinen Gurt zu lösen, es ist schwierig aber du schaffst es und steigst aus..."
  ];

var character = {
    name: "",
    health: 5,
    strength: 0,
    stealth: 0,
    energy: 0,
    characterClass: ""
  };

var characterClassNames = [
  "Bitte deinen Charakter wählen",
  "Soldat",
  "Arzt",
  "Agent",
  "Schüler",
  "Ruderer",
  "Autoverkäufer",
  "Politiker"
];

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

var whileCounter = 0;
//var randomRange;
//var randomSelect;
var select;
var input;
var randomButton;
var releaseButton = false;
var i;
var option;
var element;
var body;
var background;
var introImage;
var characterOptions = ["Bitte deinen Charakter wählen", "Soldat", "Arzt", "Agent", "Schüler", "Ruderer", "Autoverkäufer",  "Politiker"];

//var randomName;

var openingText;
var scenarioText;
var characterNameText;
var verifyCharacterName;
var randomNameGenarator;

var verifyCharacternameSecondChance;
var needCharacterText;
var needCharacterSecondChanceText;
var announceRandomCharacterText;
var characterSelectionText;
var loseLifeText;
var deathText;
var endeText;

function introImage() {
  'use strict';
  background = document.getElementById('bodyImage'); //   <--- BACKGROUND
  background.style.backgroundImage = "url(img/617394.jpg)";
}

function randomNumber(range) {
  'use strict';
  if (typeof range === "number") {
    return Math.round(Math.random() * range);
  }
}

element = document.getElementById("goOnButton");
element.value = "Ich mache weiter...";
element.addEventListener('click', openingText);

function openingText() {
  'use strict';
  background = document.getElementById('bodyImage'); //   <--- BACKGROUND
  background.style.backgroundImage = "url(img/500427.jpg)";

  document.getElementById("headline").textContent = "Stell dir vor...";
  document.getElementById("textContent").innerHTML = 'Eines Tages wachst du auf und die Welt um dich herum ist nicht mehr die, die sie am Vortag war. <br><br>Ein Konzern hat eine Geheimwaffe getestet, mit deren Hilfe Soldaten in einem Krieg so gut wie unverwundbar gamacht werden sollen.<br><br> Aber es lief etwa total schief bei dem dem Experiment. Ein extrem gefählicher und sehr schnell wirksamer Wirtkstoff in form eines Viruses hat sich dabei freigestezt und verbreitet sich rasend schnell. Seine Wirkung: die Toten werden wiedeer zum Leben erweckt. <br><br>Es gibt keine Hoffnung, kein Gegenmittel, nur den Kampf um das blanke Überleben...';


  document.getElementById("goOnButton").textContent = "Ich mache weiter...";
  element = document.getElementById("goOnButton");
  element.addEventListener('click', scenarioText);
}

function scenarioText() {
  'use strict';
  var randomScenarioIndex = randomNumber(beginningScenarios.length - 1);
  var intro = beginningScenarios[randomScenarioIndex];
  document.getElementById("headline").textContent = "So sieht es heute aus:";
  document.getElementById("textContent").innerHTML = "Deine Geschichte beginnt so: <br><br>" + intro;

  if (randomScenarioIndex === 0) {
    background = document.getElementById('bodyImage'); //   <--- BACKGROUND
    background.style.backgroundImage = "url(img/356271-blackangel.jpg)"; // Krankenhaus
  } else if (randomScenarioIndex === 1) {
    background = document.getElementById('bodyImage'); //   <--- BACKGROUND
    background.style.backgroundImage = "url(img/342119.jpg)"; // Kellerraum
  } else if (randomScenarioIndex === 2) {
    background = document.getElementById('bodyImage'); //   <--- BACKGROUND
    background.style.backgroundImage = "url(img/640151.jpg)"; // Feld
  } else if (randomScenarioIndex === 3) {
    background = document.getElementById('bodyImage'); //   <--- BACKGROUND
    background.style.backgroundImage = "url(img/zombie-784914_1920.jpg)"; // Gasse
  } else {
    background = document.getElementById('bodyImage'); //   <--- BACKGROUND
    background.style.backgroundImage = "url(img/lost-474124_1920.jpg)"; // Autounfall
  }

  document.getElementById("goOnButton").textContent = "Weiter...";
  element = document.getElementById("goOnButton");
  element.addEventListener('click', characterNameText);
}


function characterNameText() {
  'use strict';
  background = document.getElementById('bodyImage'); //   <--- BACKGROUND
  background.style.backgroundImage = "url(img/77351.jpg)";

  document.getElementById("headline").textContent = "Wie heißt du eigentlich?";
  document.getElementById("textContent").textContent = "Es wäre schön, wenn du mir deinen Namen verrätst, damit ich weiß, wie ich dich anreden soll.";

  input = document.getElementById("inputField"); // <--- INPUT FIELD
  input.style.display = ""; // <-------------- INPUT VISIBLE
  character.name = input.value;

  document.getElementById("goOnButton").textContent = "Weiter..."; // <-- BTN
  element = document.getElementById("goOnButton");
  element.addEventListener('click', verifyCharacterName);

  document.getElementById("randomButton").textContent = "Zufällige Name"; // <-- BTN
  randomButton = document.getElementById("randomButton"); // <--- RANDOMBUTTON
  randomButton.style.display = ""; // <-------------- RANDOMBUTTON VISIBLE
  randomButton.addEventListener('click', randomCharacteName);
}

// function randomNameGenarator () {
//  'use strict';
//   var randomRange = (characterAutomaticNames.length - 1);
//   var randomSelect = randomNumber(randomRange);
//   var randomName = (characterAutomaticNames[randomSelect]);
//   character.name = randomName.value;
// }

function randomNameGenerator() {
  'use strict';
  var randomNameIndex = (characterAutomaticNames.length - 1);
  var randomAutomaticName = characterAutomaticNames[randomNameIndex];
  character.name = randomAutomaticName;
}

function randomCharacteName() {
  'use strict';
  
  window.alert("Der Characte Name: " + character.name);
}

//function randomNameGenarator() {
//  'use strict';
//  randomRange = (characterAutomaticNames.length - 1);
//  randomSelect = randomNumber(randomRange);
//  randomName = characterAutomaticNames[randomSelect];
//  character.name = randomName.toString();
//
//  needCharacterText();
//}

//function verifyCharacterName() {
//  'use strict';
//  background = document.getElementById('bodyImage'); //   <--- BACKGROUND
//  background.style.backgroundImage = "url(img/617394.jpg)";
//
//  if (character.name === "") {
//    document.getElementById("headline").textContent = "Ein neuer Versuch, wie heißt du?!?!?!?!";
//    document.getElementById("textContent").textContent = "Für den weiteren Spielverlauf wäre es wirklich toll, wenn du mir deinen Namen verrätst. Ansonsten müsste ich mir einen für dich ausdenken.";
//
//    input = document.getElementById("inputField"); // <--- INPUT FIELD
//    input.style.display = ""; // <-------------- INPUT VISIBLE
//    character.name = input.value;
//
//    document.getElementById("goOnButton").textContent = "Ok, ok... Weiter."; // <-- BTN
//    element = document.getElementById("goOnButton");
//    element.addEventListener('click', verifyCharacternameSecondChance);
//  } else {
//    needCharacterText();
//  }
//}

//function verifyCharacternameSecondChance() {
//  'use strict';
//  background = document.getElementById('bodyImage'); //   <--- BACKGROUND
//  background.style.backgroundImage = "url(img/292455-alexfas01.jpg)";
//
//  input = document.getElementById("inputField"); // <--- INPUT FIELD
//  input.style.display = "none"; // <-------------- INPUT INVISIBLE
//
//  if (character.name === "") {
//    randomRange = (characterAutomaticNames.length - 1);
//    randomSelect = randomNumber(randomRange);
//    randomName = characterAutomaticNames[randomSelect];
//    character.name = randomName.toString();
//
//    document.getElementById("headline").textContent = "Dein Name lautet ab jetzt:";
//    document.getElementById("textContent").innerHTML = "Tadaa...<br><br><center><b>\"" + character.name + "\"</b><center>";
//
//    document.getElementById("goOnButton").textContent = "So soll es sein."; // <-- BTN
//    element = document.getElementById("goOnButton");
//    element.addEventListener('click', needCharacterText);
//  } else {
//    needCharacterText();
//  }
//}

function needCharacterText() {
  'use strict';
  document.getElementById("randomButton").textContent = "Zufälliger Name"; // <-- BTN
  randomButton = document.getElementById("randomButton"); // <--- RANDOMBUTTON
  randomButton.style.display = "none"; // <-------------- RANDOMBUTTON IN-VISIBLE

  background = document.getElementById('bodyImage'); //   <--- BACKGROUND
  background.style.backgroundImage = "url(img/people-1048128_1920.jpg)";
  document.getElementById("headline").textContent = "Wer warst du gestern noch?";
  document.getElementById("textContent").textContent = character.name + ", in solchen Zeiten stehen dein Können und dein Charakter vor einer großen Prüfung. Wer warst du, bevor sich alles geändert hat? Wähle von diesen Möglichkeiten: \n Soldat, Arzt, Agent, Schüler, Ruderer, Autoverkäufer oder Politiker: ";
  input = document.getElementById("inputField"); // <--- INPUT FIELD OFF
  input.style.display = "none"; // <-------------- INPUT IN-VISIBLE
  select = document.getElementById("pullDown"); // <--- PULL DOWN ON
  select.style.display = "";
  for (i = 0; i < characterOptions.length; i++) {
    option = characterOptions[i];
    element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    select.appendChild(element);
    element = document.getElementById("pullDown");
    character.characterClass = element.options[element.selectedIndex].value;
  }

  document.getElementById("goOnButton").textContent = "Weiter..."; // <-- BTN
  element = document.getElementById("goOnButton");
  element.addEventListener('click', announceRandomCharacterText);


//  if (character.characterClass === "Bitte deinen Charakter wählen") {
//    element.addEventListener('click', needCharacterSecondChanceText);
//    window.alert(character.characterClass);
//  } else {
//    element.addEventListener('click', characterSelectionText);
//    window.alert(character.characterClass);
//  }
}


//function needCharacterSecondChanceText() {
//  'use strict';
//  document.getElementById("randomButton").textContent = "Zufällige Name"; // <-- BTN
//  randomButton = document.getElementById("randomButton"); // <--- RANDOMBUTTON
//  randomButton.style.display = "none"; // <-------------- RANDOMBUTTON IN-VISIBLE
//
//  input = document.getElementById("inputField"); // <--- INPUT FIELD OFF
//  input.style.display = "none"; // <-------------- INPUT IN-VISIBLE
//  select = document.getElementById("pullDown"); // <--- PULL DOWN ON
//
//  document.getElementById("headline").textContent = "Bitte angeben, wer du gestern warst, bevor es zu diesem Unglück kam.";
//  document.getElementById("textContent").textContent = "Es ist wirklich wichtig, dass du deine Eigenschaften preisgibst. Was warst du also gestern noch? Soldat, Arzt, Agent, Schüler, Ruderer, Autoverkäufer oder vielleicht Politiker";
//
//  select = document.getElementById("pullDown");
//  select.style.display = "";
//  character.characterClass = element.options[element.selectedIndex].value;
//  if (character.characterClass === "Bitte deinen Charakter wählen") {
//    document.getElementById("goOnButton").textContent = "Ok, weiter..."; // <-- BTN
//    element = document.getElementById("goOnButton");
//    element.addEventListener('click', announceRandomCharacterText);
//  } else {
//    select.style.display = "none";
//    characterSelectionText();
//  }
//}


function announceRandomCharacterText() {
  'use strict';
  document.getElementById("randomButton").textContent = "Zufällige Name"; // <-- BTN
  randomButton = document.getElementById("randomButton"); // <--- RANDOMBUTTON
  randomButton.style.display = "none"; // <-------------- RANDOMBUTTON IN-VISIBLE
  input = document.getElementById("inputField"); // <--- INPUT FIELD OFF
  input.style.display = "none"; // <-------------- INPUT IN-VISIBLE

  background = document.getElementById('bodyImage'); //   <--- BACKGROUND
  background.style.backgroundImage = "url(img/617394.jpg)";
  if (character.characterClass === "Bitte deinen Charakter wählen") {
    document.getElementById("headline").textContent = "Wenn du es nicht mehr weißt, dann...";
    document.getElementById("textContent").textContent = "Dann sage ich dir eben, wer du vorher warst....\n\n... einen Moment Geduld bitte...\n\n";
    select = document.getElementById("pullDown");
    select.style.display = "none";
    randomRange = (characterClassNames.length - 1);
    randomSelect = randomNumber(randomRange);
    character.characterClass = characterClassNames[randomSelect];
    document.getElementById("goOnButton").textContent = "Da bin ich mal gespannt..."; // <-- BTN
    element = document.getElementById("goOnButton");
    element.addEventListener('click', characterSelectionText);
  } else {
    select.style.display = "none";
    characterSelectionText();
  }
}

function characterSelectionText() {
  'use strict';
  document.getElementById("headline").textContent = "Hi \"" + character.name + "\", schön, dass auch das jetzt geklärt ist.";
  document.getElementById("textContent").innerHTML = "Gestern warst du also noch <b>" + character.characterClass + "</b> und heute rettet dir deine Vergangenheit vielleicht das Leben. Es kann aber auch sein, dass sie es dir ganz besonders schwer macht.";

  switch (character.characterClass) {
  case "Soldat":
    background = document.getElementById('bodyImage'); //   <--- BACKGROUND
    background.style.backgroundImage = "url(img/military-947634_1920.jpg)";
    // window.alert("Soldat");
    character.health += 1;
    character.stealth += 0;
    character.strength += 4;
    // window.alert("healt: " + character.health + "\nstealth: " + character.stealth + "\nstrength: " + character.strength);
    break;
  case "Arzt":
    background = document.getElementById('bodyImage'); //   <--- BACKGROUND
    background.style.backgroundImage = "url(img/surgery-843840_1920.jpg)";
    // window.alert("Arzt");
    character.health += 5;
    character.stealth += 0;
    character.strength += 4;
    // window.alert("healt: " + character.health + "\nstealth: " + character.stealth + "\nstrength: " + character.strength);
    break;
  case "Agent":
    background = document.getElementById('bodyImage'); //   <--- BACKGROUND
    background.style.backgroundImage = "url(img/robert-vaughn-400682_1280.jpg)";
    // window.alert("Agent");
    character.health += 1;
    character.stealth += 0;
    character.strength += 4;
    // window.alert("healt: " + character.health + "\nstealth: " + character.stealth + "\nstrength: " + character.strength);
    break;
  case "Schüler":
    background = document.getElementById('bodyImage'); //   <--- BACKGROUND
    background.style.backgroundImage = "url(img/library-922998_1280.jpg)";
    // window.alert("Schüler");
    character.health += 1;
    character.stealth += 0;
    character.strength += 4;
    // window.alert("healt: " + character.health + "\nstealth: " + character.stealth + "\nstrength: " + character.strength);
    break;
  case "Ruderer":
    background = document.getElementById('bodyImage'); //   <--- BACKGROUND
    background.style.backgroundImage = "url(img/kayaking-1149886_1920.jpg)";
    // window.alert("Ruderer");
    character.health += 1;
    character.stealth += 0;
    character.strength += 4;
    // window.alert("healt: " + character.health + "\nstealth: " + character.stealth + "\nstrength: " + character.strength);
    break;
  case "Autoverkäufer":
    background = document.getElementById('bodyImage'); //   <--- BACKGROUND
    background.style.backgroundImage = "url(img/autos-1115600_1920.jpg)";
    // window.alert("Autoverkäufer");
    character.health += 1;
    character.stealth += 0;
    character.strength += 4;
    // window.alert("healt: " + character.health + "\nstealth: " + character.stealth + "\nstrength: " + character.strength);
    break;
  case "Politiker":
    background = document.getElementById('bodyImage'); //   <--- BACKGROUND
    background.style.backgroundImage = "url(img/federal-chancellery-639100_1920.jpg)";
    // window.alert("Politiker");
    character.health += 1;
    character.stealth += 0;
    character.strength += 4;
    // window.alert("healt: " + character.health + "\nstealth: " + character.stealth + "\nstrength: " + character.strength);
    break;
  }

  document.getElementById("goOnButton").textContent = "Weiter";
  element = document.getElementById("goOnButton");
  element.addEventListener('click', endeText);
}

function checkCharacterVitality() {
  'use strict';
  character.energy = (character.health + character.stealth + character.strength) / 3;
  if (character.energy < 5 && character.energy > 2) {
    // window.alert(" Lebensenergie: " + character.energy);
    loseLifeText();
  } else if (character.energy < 3) {
    // window.alert(" Lebensenergie: " + character.energy);
    deathText();
  } else {
    endeText();
  }
}

function endeText() {
  'use strict';
  background = document.getElementById('bodyImage'); //   <--- BACKGROUND
  background.style.backgroundImage = "url(img/123836.jpg)";
  document.getElementById("headline").textContent = "Ende";
  document.getElementById("textContent").textContent = "Soweit geht es erst einmal.";
  document.getElementById("goOnButton").textContent = "Weiter"; // <-- BTN
  element = document.getElementById("goOnButton");
  element.addEventListener('click', endeText);
}

function loseLifeText() {
  'use strict';
  background = document.getElementById('bodyImage'); //   <--- BACKGROUND
  background.style.backgroundImage = "url(img/292455-alexfas01.jpg)";
  document.getElementById("headline").textContent = "Das ist dein Ende.";
  document.getElementById("textContent").innerHTML = "Deine Lebensenergie ist mittlerweile so schwach geworden, dass du jetzt deine letzten Züge atmest. <br><br> ...für dich gibt es keine Möglichkeit mehr...<br><br>...du bis ab jetzt auch ein Zombie. Aber das ist eine andere Geschichte.";
//  document.getElementById("goOnButton").textContent = "Weiter";
//  element = document.getElementById("goOnButton");
//  element.addEventListener('click', endeText);
}

function deathText() {
  'use strict';
  background = document.getElementById('bodyImage'); //   <--- BACKGROUND
  background.style.backgroundImage = "url(img/266598.jpg)";
  document.getElementById("headline").textContent = "Du bist tot.";
  document.getElementById("textContent").innerHTML = "Das hast du nicht überlebt.<br><br>...du bis ab jetzt auch ein Zombie. Aber das ist eine andere Geschichte.";
}









