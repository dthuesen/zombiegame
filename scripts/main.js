var character = {
    name: "Irgendein Name",
    health: 5,
    strength: 0,
    stealth: 0,
    energy: 0,
    characterClass: "default"
};

function goingToDie() {
  'use strict';
  
  var select = document.getElementById("pullDown"); // <--- PULL DOWN ON
  select.style.display = "none"; // <----------------- PULL DOWN INVISIBLE
  
  var headline = document.getElementById("headline");
  var paragraphText = document.getElementById("textContent");
  var randomButton = document.getElementById("randomButton");
  randomButton.style.display = "none"; // <-------- RANDOM BUTTON INVISIBLE
  
  var buttonGoOn = document.getElementById("goOnButton");
  buttonGoOn.style.display = "none"; // <-----------------  GO ON BUTTON INVISIBLE
  document.getElementById("reloadButton").style.display = ""; // <----- RELOAD BUTTON VISIBLE
  
  headline.textContent = "Du bist tatsächlich gestorben." ;
  paragraphText.textContent = characterName + ", da ist nichts mehr zu machen, du hast dein Leben ausgehaucht. Dein Energy-Level ist leider viel zu gering: " + character.energy + " Das reicht leider nicht mehr zum Überleben. Du bist definitif tot.";
  
  document.getElementById("message").innerHTML = character.characterClass;
}

function getEnergyValue() {
  character.energy = ((character.health + character.stealth + character.strength) / 3).toFixed(1);
}

getEnergyValue();
checkLive();

function getDashboardValues() {
  document.getElementById("health").innerHTML = "Health: " + character.health;
  document.getElementById("stealth").innerHTML = "Stealth: " + character.stealth;
  document.getElementById("strength").innerHTML = "Strength: " + character.strength;
  document.getElementById("energy").innerHTML = "Energy: " + character.energy;
}

function checkLive() {
  character.energy = ((character.health + character.stealth + character.strength) / 3).toFixed(1);
  var energyLevel = character.energy;
  if (energyLevel <= 1.5) {
    return goingToDie();
  }
}


var characterName = character.name;
var beginningScenarios = [
    // 0 = Krankenhaus, ungewöhnlich still, zur Tür schleichen
    // 1 = Kelleraum, dunktel, tastend eine Tür finden
    // 2 = Haus auf einem weiten Feld, Tür öffnen
    // 3 = in einer Gasse hinter einem Müllcontainer, Mündung der Gasse
    // 4 = Autounfall, stockfinster, Schwierigkeiten beim Aussteigen
    "Du erwachst in einem Krankenhaus. Um dich herum ist es ungewöhnlich still. Du schleichst auf Zehenspitzen zur Tür in der Erwartung, dass du von etwas schrecklichem überrascht wirst...",
    "Du wachst in einem dunklen Kelleraum auf. Du kannst weder Vogelgezitscher noch andere Stimmen hören. Außer einer großen Ansammlung von grunzenden Stöhnlauten in weiter Ferne. Du kannst nichts sehen, es ist stockfinster. Du tastest dich durch den Raum und findest eine Tür...",
    "Du stehst mitten auf einem weiten Feld. Bis an den Horizont ist nichts weiter zu sehen als Getreide, das sich kurz vor der Ernte befindet. Nur ein kleines weißes Haus unterbricht diese totale Einsamkeit. Du kämpfst dich durch das Feld und kommst zu dem Haus. Du du öffnest die Vordertür...",
    "Der Morgen graut. Es ist sehr kalt und du kommst zu dir von einem traumlosen Schlaf. Du fühlst dich völlig gerädert. Und du weißt jetzt auch wieso. Du hast in einer Gasse hinter einem Müllcontainer gelegen. Du stehst auf und willst herausfinden, wo diese einsame und sehr enge Gasse mündet....",
    "Dein Rücken schmerzt. Dein Kopf brummt. Du machst die Augen auf und blinzelst vor dich hin. Es ist fast stockfinster um dich herum. Das einzige Licht, das du wahrnimmst, ist der Mondschein, der ab und zu hinter Wolken verschwindet. So langsam realisierst du, wo du dich befindest. Du hast dein Auto anscheinend gegen einen Gegenstand gefahren. Der Kühler dampft noch und zischt, die Winschutzscheibe ist eingedrückt und in viele kleine Teile eingerissen. Du versuchst deinen Gurt zu lösen, es ist schwierig aber du schaffst es und steigst aus..."
  ];
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
var characterOptions = [
  "Bitte deinen Charakter wählen",
  "Soldat",
  "Arzt",
  "Agent",
  "Schüler",
  "Ruderer",
  "Autoverkäufer",
  "Politiker"
];

var situationWeapons = [
  "Was tust du? Bitte wählen",
  "Weglaufen",
  "Den Zombie mit bloßen Händen töten",
  "Mit der Gummiente vom Boden erschlagen.",
  "In den Hals beißen, bis der Zombie tot ist.",
  "Tot stellen",
  "Weg schleichen",
];
var situationWeapons2 = [
  "Was tust du? Bitte wählen",
  "Schnell einen einsameren Weg suchen.",
  "Gegen die Zombies kämpfen, wie ein Held",
  "Mit der Gummiente vom Boden erschlagen.",
  "In den Hals beißen, bis der Zombie tot ist.",
  "Tot stellen",
  "Weg schleichen",
];
var selectedSitationWeapon = "";
var randomScenarioIndex = 0;
var scenarioStart = "";
var outcome = 0;

var randomNumber = function randomNumber(range) {
  'use strict';
  if (typeof range === "number") {
    return Math.round(Math.random() * range);
  }
};


function introImage() {
  'use strict';
  var messageParagraph = document.getElementById("messageDiv");
  messageParagraph.style.display = "none";
  //document.getElementById("message").innerHTML="bin jetzt in introImage";
  
  var background = document.getElementById('bodyImage');
    background.style.backgroundImage = "url(img/617394.jpg)";
    
  var startButton = document.getElementById("goOnButton");
  startButton.textContent = "Ich mache weiter...";
  startButton.addEventListener('click', openingText);
}

function openingText() {
  'use strict';
  //document.getElementById("message").innerHTML="bin jetzt in openingText";
  

  getEnergyValue();/////////<------------------------------------ CALL BLOCK FOR
  getDashboardValues();////<------------------------------------- CHECK & UPDATE VALUES
  checkLive();////////////<-------------------------------------- MUST STAY TOGETHER
  
  var dashboard = document.getElementById("dashboard").style.display = "";
  
  var background = document.getElementById('bodyImage');
  var headline = document.getElementById("headline");
  var paragraphText = document.getElementById("textContent");
  var buttonGoOn = document.getElementById("goOnButton");

  background.style.backgroundImage = "url(img/500427.jpg)"; //   <--- BACKGROUND

  headline.textContent = "Stell dir vor...";
  paragraphText.innerHTML = 'Eines Tages wachst du auf und die Welt um dich herum ist nicht mehr die, die sie am Vortag war. <br><br>Ein Konzern hat eine Geheimwaffe getestet, mit deren Hilfe Soldaten in einem Krieg so gut wie unverwundbar gamacht werden sollen.<br><br> Aber es lief etwa total schief bei dem dem Experiment. Ein extrem gefählicher und sehr schnell wirksamer Wirtkstoff in form eines Viruses hat sich dabei freigestezt und verbreitet sich rasend schnell. Seine Wirkung: die Toten werden wiedeer zum Leben erweckt. <br><br>Es gibt keine Hoffnung, kein Gegenmittel, nur den Kampf um das blanke Überleben...';
  
  buttonGoOn.textContent = "Jetzt erst recht weiter..."; // <-- BTN
  buttonGoOn.addEventListener('click', scenarioText);
}

function scenarioText() {
  'use strict';
  // document.getElementById("message").innerHTML="bin jetzt in scenarioText";

  var background = document.getElementById('bodyImage');
  randomScenarioIndex = randomNumber(beginningScenarios.length - 1);
  var intro = beginningScenarios[randomScenarioIndex];
  scenarioStart = intro;
  var headline = document.getElementById("headline");
  var paragraphText = document.getElementById("textContent");

  headline.textContent = "So sieht es heute aus:";
  paragraphText.innerHTML = "Deine Geschichte beginnt so: <br><br>" + intro;

  if (randomScenarioIndex === 0) {
    background.style.backgroundImage = "url(img/356271-blackangel.jpg)"; // Krankenhaus
  } else if (randomScenarioIndex === 1) {
    background.style.backgroundImage = "url(img/342119.jpg)"; // Kellerraum
  } else if (randomScenarioIndex === 2) {
    background.style.backgroundImage = "url(img/640151.jpg)"; // Feld
  } else if (randomScenarioIndex === 3) {
    background.style.backgroundImage = "url(img/zombie-784914_1920.jpg)"; // Gasse
  } else {
    background.style.backgroundImage = "url(img/lost-474124_1920.jpg)"; // Autounfall
  }

  var buttonGoOn = document.getElementById("goOnButton");
  buttonGoOn.textContent = "Na klar, weiter..."; // <-- BTN
  buttonGoOn.addEventListener('click', characterNameText);
}

function characterNameText() {
  'use strict';

  // document.getElementById("message").innerHTML="bin jetzt in characterNameText";
  
  var background = document.getElementById('bodyImage');
  var input = document.getElementById("inputField");
  var headline = document.getElementById("headline");
  var paragraphText = document.getElementById("textContent");
  background.style.backgroundImage = "url(img/77351.jpg)";

  headline.textContent = "Sag mal, wie heißt du eigentlich?";
  paragraphText.textContent = "Bevor wir weitermachen, wäre schön, wenn du mir deinen Namen verrätst, damit ich weiß, wie ich dich anreden soll.";

  input = document.getElementById("inputField"); // <--- INPUT FIELD
  input.style.display = ""; // <-------------- INPUT VISIBLE
  
  character.name = input.value;
  

  var buttonGoOn = document.getElementById("goOnButton");
  buttonGoOn.textContent = "Absenden"; // <-- BTN
  buttonGoOn.addEventListener('click', validateName);

  function validateName() {
    if (character.name === "") {
      paragraphText.innerHTML = "Ich benötige deinen Namen, damit ich weiß, wie ich dich anreden soll.<br><br> Bitte wähle, ob du deinen eigenen Namen eingeben möchtest oder ich mir einen ausdenken soll.<br><br> Eigenen eingeben oder einen ausdenke?";
      var randomButton = document.getElementById("randomButton");
      randomButton.style.display = "";
      randomButton.textContent = "Namen ausdenken!"; // <-- BTN
      randomButton.addEventListener('click', randomCharacteName);
    } else {
      characterName = character.name; // This line is necessary becaus of a conflict between random name and name by input
      paragraphText.innerHTML = "Name jetzt bekannt: " + character.name;
      realCharacterName();
      
    }
  }
}

function randomCharacteName() {
  'use strict';
  var headline = document.getElementById("headline");
  var paragraphText = document.getElementById("textContent");
  var randomRange = (characterAutomaticNames.length - 1);
  var randomSelect = randomNumber(randomRange);
  var randomName = characterAutomaticNames[randomSelect];
  character.name = randomName;
  characterName = character.name; // this is necessary to get the random generated name stored in a variable, that lasts longer ;-)
  var input = document.getElementById("inputField");

  
  input = document.getElementById("inputField"); // <--- INPUT FIELD
  input.style.display = "none"; // <-------------- INPUT INVISIBLE
  
  var randomButton = document.getElementById("randomButton");
  randomButton.style.display = "none"; // <-------- RANDOM BUTTON INVISIBLE
  
  headline.textContent = "Deine name lautet ab jetzt:";
  paragraphText.innerHTML = '"' + character.name + '"';
  
  
  var buttonGoOn = document.getElementById("goOnButton");
  buttonGoOn.textContent = "Na wunderbar, weiter."; // <-- BTN
  buttonGoOn.addEventListener('click', realCharacterName);

  var messageParagraph = document.getElementById("messageDiv");
  messageParagraph.style.display = "none";
  document.getElementById("message").innerHTML="bin jetzt in randomCharacteName";
  
}

function realCharacterName() {
  'use strict';
  var headline = document.getElementById("headline");
  var paragraphText = document.getElementById("textContent");
  var input = document.getElementById("inputField");
  input = document.getElementById("inputField"); // <--- INPUT FIELD
  input.style.display = "none"; // <-------------- INPUT VISIBLE

  headline.textContent = "Hi " + characterName + ", gut dass dir dein Name noch bekannt ist.";
  paragraphText.innerHTML = "Ich weiß jetzt also, dass du " + characterName + " heißt. Für den Verlauf der Geschichte ist es aber wichtig, dass du dir darüber im Klaren bist, dass du sterben kannst. Willst du weiter machen?";
  
  var randomButton = document.getElementById("randomButton");
  randomButton.style.display = "none"; // <-------- RANDOM BUTTON INVISIBLE
  
  var buttonGoOn = document.getElementById("goOnButton");
  buttonGoOn.textContent = "Aber sicher, weiter!"; // <-- BTN
  buttonGoOn.addEventListener('click', needCharacterText);

  var messageParagraph = document.getElementById("messageDiv");
  messageParagraph.style.display = "none";
  document.getElementById("message").innerHTML="bin jetzt in realCharacterName";
}

function needCharacterText() {
  'use strict';

  var messageParagraph = document.getElementById("messageDiv");
  messageParagraph.style.display = "";
  document.getElementById("message").innerHTML="bin jetzt in needCharacterText";

  var headline = document.getElementById("headline");
  var paragraphText = document.getElementById("textContent");

  headline.textContent = "Weißt du noch, wer du warst?" ;
  paragraphText.innerHTML = characterName + ", damit wir diese Geschichte gemeinsam überstehen können, ist es jetzt absolut notwendig, dass du mir verrätst, wer du warst, bevor das Schlamassel hier los ging.";
  var input = document.getElementById("inputField"); // <--- INPUT FIELD OFF
  input.style.display = "none"; // <------------------------ INPUT IN-VISIBLE

  var characterSelect = document.getElementById("pullDown"); // <--- Get PULL DOWN
  characterSelect.style.display = ""; // <-------------------------- PULL DOWN VISIBLE
  
  var buttonGoOn = document.getElementById("goOnButton"); // <------ Get GoOnButton
  buttonGoOn.style.display = "none"; // <--------------------------- BUTTON INVISIBLE
  
  var randomButton = document.getElementById("randomButton");
  randomButton.style.display = "none"; // <-------- RANDOM BUTTON INVISIBLE
  
  for (var i = 0; i < characterOptions.length; i++) {
    var elementCharacter = document.createElement("option");
    var option = characterOptions[i];
    elementCharacter.textContent = option;
    elementCharacter.value = option;
    characterSelect.appendChild(elementCharacter);
    elementCharacter = document.getElementById("pullDown");
    character.characterClass = elementCharacter.options[elementCharacter.selectedIndex].value;
  }
  elementCharacter.setAttribute("onchange", "checkAndSetCharacter()"); //<--- SetAttribute OnChange
  if(elementCharacter.selectedIndex === 0) {
    // DO NOTHING
  } else {
    elementCharacter.removeAttribute("onchange");
    checkAndSetCharacter();
  }
}

function checkAndSetCharacter() {
  'use strict';
  
  var headline = document.getElementById("headline");
  var paragraphText = document.getElementById("textContent");
  
  var characterSelect = document.getElementById("pullDown"); // <--- Get PULL DOWN
  characterSelect.style.display = "none"; // <-------------------------- PULL DOWN INVISIBLE
  
  headline.textContent = "Gut gemacht, " + characterName;
  paragraphText.innerHTML = "Du bist also " + character.characterClass + ". Es ist immer gut zu wissen, mit wem man es zu tun hat. Vielleicht hilft es dir wirklich weiter, dass du in deinem letzten Leben " + character.characterClass + " warst. <br><br> Was mich anbetrifft, sollte ich jetzt eine gewisse Ahnung davon haben, was du in der Lage bist zu leisten. Mein Vertrauen ist mit dir. Vermutlich war dieses Vorgeplenkel allerdings auch das letzte, was wirklich gut lief. Die bröckelden Gestalten sind und lauern überall.";
  
  var messageParagraph = document.getElementById("messageDiv");
  messageParagraph.style.display = "";
  document.getElementById("message").innerHTML="bin jetzt in checkAndSetCharacter";
  
  var randomButton = document.getElementById("randomButton");
  randomButton.style.display = "none"; // <-------- RANDOM BUTTON INVISIBLE
  
  function switchCharacter() {
    if (character.characterClass === "Bitte deinen Charakter wählen"){
      needCharacterText();
  } else {
    switch (character.characterClass) {
      case "Soldat":
        var background = document.getElementById('bodyImage'); //   <--- BACKGROUND
        background.style.backgroundImage = "url(img/military-947634_1920.jpg)";
        
        character.health += 1;
        character.stealth += 0;
        character.strength += 4;
        
        //checkLive();////////////<-------------------------------------- MUST STAY TOGETHER
        break;
      case "Arzt":
        background = document.getElementById('bodyImage'); //   <--- BACKGROUND
        background.style.backgroundImage = "url(img/surgery-843840_1920.jpg)";
        
        character.health += 5;
        character.stealth += 0;
        character.strength += 4;
        
        //checkLive();////////////<-------------------------------------- MUST STAY TOGETHER
        break;
      case "Agent":
        background = document.getElementById('bodyImage'); //   <--- BACKGROUND
        background.style.backgroundImage = "url(img/robert-vaughn-400682_1280.jpg)";
       
        character.health += 1;
        character.stealth += 0;
        character.strength += 4;
        
        //checkLive();////////////<-------------------------------------- MUST STAY TOGETHER
        break;
      case "Schüler":
        background = document.getElementById('bodyImage'); //   <--- BACKGROUND
        background.style.backgroundImage = "url(img/library-922998_1280.jpg)";
        
        character.health = 1;
        character.stealth += 0;
        character.strength = 3;
        
        //checkLive();////////////<-------------------------------------- MUST STAY TOGETHER
        break;
      case "Ruderer":
        background = document.getElementById('bodyImage'); //   <--- BACKGROUND
        background.style.backgroundImage = "url(img/kayaking-1149886_1920.jpg)";
        
        character.health += 1;
        character.stealth += 0;
        character.strength += 4;
        break;
      case "Autoverkäufer":
        background = document.getElementById('bodyImage'); //   <--- BACKGROUND
        background.style.backgroundImage = "url(img/autos-1115600_1920.jpg)";
        
        character.health += 1;
        character.stealth += 0;
        character.strength += 4;
        
        //checkLive();////////////<-------------------------------------- MUST STAY TOGETHER
        break;
      case "Politiker":
        background = document.getElementById('bodyImage'); //   <--- BACKGROUND
        background.style.backgroundImage = "url(img/federal-chancellery-639100_1920.jpg)";
        
        character.health += 1;
        character.stealth += 0;
        character.strength += 4;
        
        //checkLive();////////////<-------------------------------------- MUST STAY TOGETHER
        break;
      default:
        
          
      }
    }
    // getEnergyValue();/////////<------------------------------------ CALL BLOCK FOR
    // getDashboardValues();////<------------------------------------- CHECK & UPDATE VALUES
    // checkLive();////////////<-------------------------------------- MUST STAY TOGETHER
    
    // 0 = Krankenhaus, ungewöhnlich still, zur Tür schleichen
    // 1 = Kelleraum, dunktel, tastend eine Tür finden
    // 2 = Haus auf einem weiten Feld, Tür öffnen
    // 3 = in einer Gasse hinter einem Müllcontainer, Mündung der Gasse
    // 4 = Autounfall, stockfinster, Schwierigkeiten beim Aussteigen
    
    var buttonGoOn = document.getElementById("goOnButton");
    buttonGoOn.style.display = "";
    buttonGoOn.textContent = "Ist ja schon gut, weiter!"; // <-- BTN
    buttonGoOn.addEventListener('click', declareCharacterClass);
  }
  
  switchCharacter();
  
 
}

function declareCharacterClass() {
  'use strict';
  
  var headline = document.getElementById("headline");
  var paragraphText = document.getElementById("textContent");
  
  var background = document.getElementById('bodyImage'); //   <--- BACKGROUND
  background.style.backgroundImage = "url(img/zombie-945622_1920.jpg)";
  
  headline.textContent = "Jetzt solltest du dich auf die Socken machen";
  paragraphText.innerHTML = "Es bleibt spannend.";
  
  var messageParagraph = document.getElementById("messageDiv");
  messageParagraph.style.display = "";
  document.getElementById("message").innerHTML="bin jetzt in declareCharacterClass";
  
  if (randomScenarioIndex === 0) {
    storyHospital(); // Krankenhaus
  } else if (randomScenarioIndex === 1) {
    storyBasement(); // Kellerraum
  } else if (randomScenarioIndex === 2) {
    storyField(); // Feld
  } else if (randomScenarioIndex === 3) {
    storyAlley(); // Gasse
  } else {
    storyCarCrash(); // Autounfall
  }
}
  
function storyHospital() {
  'use strict';
  checkLive();
    
  document.getElementById("message").innerHTML="bin jetzt in storyHospital";

  var headline = document.getElementById("headline");//<--------- get ID headline
  var paragraphText = document.getElementById("textContent");//<- get ID textContent
  var randomButton = document.getElementById("randomButton");//<- get ID randomButton
  randomButton.style.display = "none"; //<----------------------- RANDOM BUTTON INVISIBLE
  var buttonGoOn = document.getElementById("goOnButton");//<----- get ID Go On Button
  buttonGoOn.style.display = "none"; //<------------------------- GO ON BUTTON INVISIBLE
  
  // if (document.getElementById('goOnButton')) {
  //   var elem = document.getElementById("goOnButton");
  //   elem.parentNode.removeChild(elem);
  // } else {
  //   alert('Fehler: Kann kein Element mit der ID "goOnButton" finden');
  // }
  
  // 0 = Krankenhaus, ungewöhnlich still, zur Tür schleichen
  headline.textContent = "Oh jeeehh, " + characterName + ", irgendetwas geht hier vor sich." ;
  paragraphText.innerHTML = "Kannst du das Röchelen hören, das Geräusch davon irgendetwas über den Boden zu schleifen, das dumpfe immer wieder gegen ein Hindernis stoßen eines Körpers? Also du die Tür aufmachst, siehst du erst einen Schatten an der Wand näher kommen. Als du um die Ecke blickst, fällst du fast hinten über. Dich ergreift Panik als du vor etwas Menschenähnliches siehst. Die Haut in Fetzen, ein Arm hängt nur noch an einem Strang. Im Flackern der kaputten Flur- und Raumbeleuchtung, fällt schwer zu erkennen, was da genau auf dich zu kommt. Aber du bist dir sicher, dieses Wesen kennst du. Dieses Wesen darf es gar nicht geben. Es ist aus den grausamen Filmen, die du so gerne siehst. es ist ein <b>Z O M B I E !!!</b> <br/><br/> Ganz klar, du must etwas tun, dich in Sicherheit bring, das Wesen aufhalten, den Zombie töten. Wie entscheidest du dich? Wähle mit Bedacht aber zögere nicht zu lange.";
  checkLive(); 
  
  
//  0 = Was tust du? Bitte wählen",
//  1 = "Weglaufen",
//  2 = "Den Zombie mit bloßen Händen töten",
//  3 = "Mit der Gummiente vom Boden erschlagen.",
//  4 = "In den Hals beißen, bis der Zombie tot ist.",
//  5 = "Tot stellen",
//  6 = "Weg schleichen",


  /*       SELECT OPTIONS BEGIN    ----->
  ================================================================================ */ 

  var weaponSelect = document.getElementById("pullDown"); // <----- get Pull Down
  weaponSelect.style.display = ""; //<----------------------------- PULL DOWN VISIBLE
  weaponSelect.setAttribute("onchange", "checkCharacter()"); //<--- SetAttribute OnChange

  ////////////////////////////////////////////////////// <--------- Empty Pull Down
  var select = document.getElementById("pullDown");
  var length = select.options.length;
  for (var i = 0; i < length;) {
    select.options[i] = null;
    length = select.options.length;
  }
  //////////////////////////////////////////////////////<----------- Fill Pull Down
  for (var i = 0; i < situationWeapons.length; i++) {
    var option = situationWeapons[i];
    var element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    weaponSelect.appendChild(element);
    element = document.getElementById("pullDown");
    selectedSitationWeapon = element.options[element.selectedIndex].value;
  }
  
  /*       SELECT OPTIONS END    <-----
  ================================================================================ */
    
  buttonGoOn.style.display = "none"; //<--------------------------- GO ON BUTTON INVISIBLE
  getEnergyInjection();

  function getEnergyInjection() {
    weaponSelect = document.getElementById("pullDown"); // <--- GET PULLDOWN
    weaponSelect.addEventListener('selected', function(){
      //  0 = Was tust du? Bitte wählen"
      if (element.selectedIndex === 0) {
        document.getElementById("attention1").innerHTML = "Du hast leider die falsche Wahl getroffen. Nämlich gar keine. Du wirst sehen, was du davon hast...";
          weaponSelect.removeEventListener('selected');
          character.strength -= 5;
          character.health += 5;
          character.stealth += 5;
          checkCharacter();
      } else if (element.selectedIndex === 1) {
          weaponSelect.removeEventListener('selected');
          //  1 = "Weglaufen"
          character.strength -= 3;
          character.health += 2;
          character.stealth += 1;
          checkCharacter();
      } else if (element.selectedIndex === 2) {
          weaponSelect.removeEventListener('selected');
          //  2 = "Den Zombie mit bloßen Händen töten"
          character.strength -= 3;
          character.health -= 2;
          character.stealth -= 1;
          checkCharacter();
      } else if (element.selectedIndex === 3) {
          weaponSelect.removeEventListener('selected');
          //  3 = "Mit der Gummiente vom Boden erschlagen."
          character.strength -= 1;
          character.health -= 1;
          character.stealth -= 1;
          checkCharacter();
      } else if (element.selectedIndex === 4) {
          weaponSelect.removeEventListener('selected');
          //  4 = "In den Hals beißen, bis der Zombie tot ist."
          character.strength -= 3;
          character.health -= 2;
          character.stealth -= 1;
          checkCharacter();
      } else if (element.selectedIndex === 5) {
          weaponSelect.removeEventListener('selected');
          //  5 = "Tot stellen"
          character.strength -= 5;
          character.health -= 5;
          character.stealth -= 5;
          checkCharacter();
      } else {
          weaponSelect.removeEventListener('selected');
          //  6 = "Weg schleichen"
          character.strength += 0;
          character.health += 1;
          character.stealth += 2;
          checkCharacter();
      }
    });
  }
}
function storyBasement() {
  'use strict';

  
  document.getElementById("message").innerHTML="bin jetzt in storyBasement";

  
  var headline = document.getElementById("headline");//<--------- get ID headline
  var paragraphText = document.getElementById("textContent");//<- get ID textContent
  var randomButton = document.getElementById("randomButton");//<- get ID randomButton
  randomButton.style.display = "none"; //<----------------------- RANDOM BUTTON INVISIBLE
  var buttonGoOn = document.getElementById("goOnButton");//<----- get ID Go On Button
  buttonGoOn.style.display = "none"; //<------------------------- GO ON BUTTON INVISIBLE
  
  // if (character.energy <= 1.4) {
  //   return checkLive();
  // }
  
  
  // 0 = finsterer Kelleraum, durch den Raum tatsen und eine Tür finden...
  headline.textContent = "Die Dunkelheit hat dich umschlossen, " + characterName + "," ;
  paragraphText.innerHTML = "Die Geräusche in diesem unterirdischen verließartigen Gemäuer sind leise aber irgendwie aufdringlich. Sie sind das Einzige, das du hören kannst. Ansonsten nur erdrückende Stille. Ein Röcheln ist zu hören, ein Geräusch davon, dass irgendetwas unbestimmtes über den Boden geschleift wird. Ein Körper stößt immer wieder gegen ein Hindernis. Zumindest klingt es so. Als du die Tür aufmachst, siehst du erst, wie ein Schatten an der Wand dir näher kommt. Als du dann um die Ecke blickst, fällst du fast hinten über. Dich ergreift Panik als du vor dir etwas menschenähnliches siehst. Die Haut hängt in Fetzen, ein Arm baumelt nur noch an einem Strang ehemaliger Muskeln. Im Flackern der kaputten Flur- und Raumbeleuchtung, fällt es dir schwer zu erkennen, was da genau auf dich zu kommt. Aber du bist dir sicher, dieses Wesen kennst du. Dieses Wesen darf es gar nicht geben. Es ist aus dem schaurig grausamen Filmen, die du so gerne siehst. es ist ein <b>Z O M B I E !!!</b> <br/><br/> Ganz klar, du must etwas tun, dich in Sicherheit bringen, das Wesen aufhalten, den Zombie töten. Wie entscheidest du dich? Wähle mit Bedacht aber zögere nicht zu lange.";
  
  
//  0 = Was tust du? Bitte wählen",
//  1 = "Weglaufen",
//  2 = "Den Zombie mit bloßen Händen töten",
//  3 = "Mit der Gummiente vom Boden erschlagen.",
//  4 = "In den Hals beißen, bis der Zombie tot ist.",
//  5 = "Tot stellen",
//  6 = "Weg schleichen",


  /*       SELECT OPTIONS BEGIN    ----->
  ================================================================================ */ 

  var weaponSelect = document.getElementById("pullDown"); // <----- get Pull Down
  weaponSelect.style.display = ""; //<----------------------------- PULL DOWN VISIBLE
  weaponSelect.setAttribute("onchange", "checkCharacter()"); //<--- SetAttribute OnChange

  ////////////////////////////////////////////////////// <--------- Empty Pull Down
  var select = document.getElementById("pullDown");
  var length = select.options.length;
  for (var i = 0; i < length;) {
    select.options[i] = null;
    length = select.options.length;
  }
  //////////////////////////////////////////////////////<----------- Fill Pull Down
  for (var i = 0; i < situationWeapons.length; i++) {
    var option = situationWeapons[i];
    var element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    weaponSelect.appendChild(element);
    element = document.getElementById("pullDown");
    selectedSitationWeapon = element.options[element.selectedIndex].value;
  }
  
  /*       SELECT OPTIONS END    <-----
  ================================================================================ */
    
  buttonGoOn.style.display = "none"; //<--------------------------- GO ON BUTTON INVISIBLE
  getEnergyInjection();

  function getEnergyInjection() {
    weaponSelect = document.getElementById("pullDown"); // <--- GET PULLDOWN
    weaponSelect.addEventListener('mousleave', function(){
      //  0 = Was tust du? Bitte wählen"
      if (element.selectedIndex === 0) {
        document.getElementById("attention1").innerHTML = "Du hast leider die falsche Wahl getroffen. Nämlich gar keine. Du wirst sehen, was du davon hast...";
          weaponSelect.removeEventListener('selected');
          character.strength -= 0;
          character.health -= 0;
          character.stealth -= 0;
          checkCharacter();
      } else if (element.selectedIndex === 1) {
          weaponSelect.removeEventListener('selected');
          //  1 = "Weglaufen"
          character.strength -= 3;
          character.health += 2;
          character.stealth += 1;
          checkCharacter();
      } else if (element.selectedIndex === 2) {
          weaponSelect.removeEventListener('selected');
          //  2 = "Den Zombie mit bloßen Händen töten"
          character.strength -= 3;
          character.health -= 2;
          character.stealth -= 1;
          checkCharacter();
      } else if (element.selectedIndex === 3) {
          weaponSelect.removeEventListener('selected');
          //  3 = "Mit der Gummiente vom Boden erschlagen."
          character.strength -= 1;
          character.health -= 1;
          character.stealth -= 1;
          checkCharacter();
      } else if (element.selectedIndex === 4) {
          weaponSelect.removeEventListener('selected');
          //  4 = "In den Hals beißen, bis der Zombie tot ist."
          character.strength -= 3;
          character.health -= 2;
          character.stealth -= 1;
          checkCharacter();
      } else if (element.selectedIndex === 5) {
          weaponSelect.removeEventListener('selected');
          //  5 = "Tot stellen"
          character.strength -= 5;
          character.health -= 5;
          character.stealth -= 5;
          checkCharacter();
      } else {
          weaponSelect.removeEventListener('selected');
          //  6 = "Weg schleichen"
          character.strength += 0;
          character.health += 1;
          character.stealth += 2;
          checkCharacter();
      }
  });
  }
}
function storyField() {
  'use strict';

  document.getElementById("message").innerHTML="bin jetzt in storyField";

  
  var headline = document.getElementById("headline");//<--------- get ID headline
  var paragraphText = document.getElementById("textContent");//<- get ID textContent
  var randomButton = document.getElementById("randomButton");//<- get ID randomButton
  randomButton.style.display = "none"; //<----------------------- RANDOM BUTTON INVISIBLE
  var buttonGoOn = document.getElementById("goOnButton");//<----- get ID Go On Button
  buttonGoOn.style.display = "none"; //<------------------------- GO ON BUTTON INVISIBLE
  

  // 2 = Feld, Tür des einzigen Hauses öffnen....
  headline.textContent = "Oh jeeehh, " + characterName + "," ;
  paragraphText.innerHTML = "Nachdem du die Vordertür geöffnet hast, kannst ein Röchelen hören und das Geräusch davon irgendetwas über den Boden zu schleifen scheint. Du hörst das dumpfe immer wieder gegen ein Hindernis stoßen eines Körpers. Du siehst zunächst nur einen Schatten an der Wand näher kommen. Als du um die Ecke blickst, fällst du fast hinten über. Dich ergreift Panik als du vor dir etwas siehst, das vorher mal ein Mensch gewesen sein muss. Die Haut flattert in Fetzen, ein Arm hängt nur noch an einem Strang. Im Flackern einer Petroleumlampe kannst du nur schwer zu erkennen, was da genau auf dich zu kommt. Aber du bist dir sicher, dieses Wesen kennst du. Dieses Wesen darf es gar nicht geben. Es ist wie aus den Horror-Filmen, die du so gerne siehst. es ist ein <b>Z O M B I E !!!</b> <br/><br/> Ganz klar, du must etwas tun, dich in Sicherheit bringen, das Wesen aufhalten, den Zombie töten. Wie entscheidest du dich? Wähle mit Bedacht aber zögere nicht zu lange.";
  
  
//  0 = Was tust du? Bitte wählen",
//  1 = "Weglaufen",
//  2 = "Den Zombie mit bloßen Händen töten",
//  3 = "Mit der Gummiente vom Boden erschlagen.",
//  4 = "In den Hals beißen, bis der Zombie tot ist.",
//  5 = "Tot stellen",
//  6 = "Weg schleichen",


  /*       SELECT OPTIONS BEGIN    ----->
  ================================================================================ */ 

  var weaponSelect = document.getElementById("pullDown"); // <----- get Pull Down
  weaponSelect.style.display = ""; //<----------------------------- PULL DOWN VISIBLE
  weaponSelect.setAttribute("onchange", "checkCharacter()"); //<--- SetAttribute OnChange

  ////////////////////////////////////////////////////// <--------- Empty Pull Down
  var select = document.getElementById("pullDown");
  var length = select.options.length;
  for (var i = 0; i < length;) {
    select.options[i] = null;
    length = select.options.length;
  }
  //////////////////////////////////////////////////////<----------- Fill Pull Down
  for (var i = 0; i < situationWeapons.length; i++) {
    var option = situationWeapons[i];
    var element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    weaponSelect.appendChild(element);
    element = document.getElementById("pullDown");
    selectedSitationWeapon = element.options[element.selectedIndex].value;
  }
  
  /*       SELECT OPTIONS END    <-----
  ================================================================================ */
    
  
  getEnergyInjection();

  function getEnergyInjection() {
    weaponSelect = document.getElementById("pullDown"); // <--- GET PULLDOWN
    weaponSelect.addEventListener('selected', function(){
      //  0 = Was tust du? Bitte wählen"
      if (element.selectedIndex === 0) {
        document.getElementById("attention1").innerHTML = "Du hast leider die falsche Wahl getroffen. Nämlich gar keine. Du wirst sehen, was du davon hast...";
          weaponSelect.removeEventListener('selected');
          character.strength -= 5;
          character.health += 5;
          character.stealth += 5;
          checkCharacter();
      } else if (element.selectedIndex === 1) {
          weaponSelect.removeEventListener('selected');
          //  1 = "Weglaufen"
          character.strength -= 1;
          character.health += 3;
          character.stealth += 3;
          checkCharacter();
      } else if (element.selectedIndex === 2) {
          weaponSelect.removeEventListener('selected');
          //  2 = "Den Zombie mit bloßen Händen töten"
          character.strength -= 1;
          character.health -= 3;
          character.stealth -= 2;
          checkCharacter();
      } else if (element.selectedIndex === 3) {
          weaponSelect.removeEventListener('selected');
          //  3 = "Mit der Gummiente vom Boden erschlagen."
          character.strength = 1;
          character.health = 1;
          character.stealth = 1;
          checkCharacter();
      } else if (element.selectedIndex === 4) {
          weaponSelect.removeEventListener('selected');
          //  4 = "In den Hals beißen, bis der Zombie tot ist."
          character.strength -= 3;
          character.health = 0;
          character.stealth -= 1;
          checkCharacter();
      } else if (element.selectedIndex === 5) {
          weaponSelect.removeEventListener('selected');
          //  5 = "Tot stellen"
          character.strength += 1;
          character.health += 2;
          character.stealth += 2;
          checkCharacter();
      } else {
          weaponSelect.removeEventListener('selected');
          //  6 = "Weg schleichen"
          character.strength += 1;
          character.health += 2;
          character.stealth += 2;
          checkCharacter();
      }
  });
}
}
function storyAlley() {
  'use strict';
  checkLive();
  
  document.getElementById("message").innerHTML="bin jetzt in storyAlley";

  
  var headline = document.getElementById("headline");//<--------- get ID headline
  var paragraphText = document.getElementById("textContent");//<- get ID textContent
  var randomButton = document.getElementById("randomButton");//<- get ID randomButton
  randomButton.style.display = "none"; //<----------------------- RANDOM BUTTON INVISIBLE
  
  // if (document.getElementById('goOnButton')) {
  //   var elem = document.getElementById("goOnButton");
  //   elem.parentNode.removeChild(elem);
  // } else {
  //   alert('Fehler: Kann kein Element mit der ID "goOnButton" finden');
  // }
  
  // 0 = Krankenhaus, ungewöhnlich still, zur Tür schleichen
  headline.textContent = "Mach dich auf etwas gefasst, " + characterName + ", deine Stunde scheint geschlagen zu haben." ;
  paragraphText.innerHTML = "Die Kälte steckt dir immer noch in den Knochen. Die Gasse, in der du aufgewacht bist, mündet an einer breiteren Straße. Allerdings ist von dem ursprünglichen Zustand dieser Straße nicht mehr viel übrig. Alles ist durcheinander. Es sieht aus, wie nach einem Krieg. Du kann in einiger Entfernung Gestalten ausmachen, die, wie es scheint dich bemerkt haben. Sie kommen lansam auf dich zu. Hinter einem Auto, das viel dichter in deiner Nähe steht, kommt plötzlich auch eine Gestalt hervor. Du kannst ein Röchelen hören, und andere Geräusche, die ein Mensch eigentlich nicht macht, wenn er sich bewegt. Die Gestalt ist jetzt so nahe, dass du sehen, kannst, was da so merkwürdig ist. Du fällst fast hinten über. Dich ergreift Panik als du vor etwas siehst, das nur noch menschenähnlich aussieht aber kein Mensch ist. Die Haut in Fetzen, ein Arm hängt nur noch an einem Strang. Du bist dir sicher, dieses Wesen kennst du. Dieses Wesen darf es gar nicht geben. Es ist wie aus den Horror B-Movies, die du so gerne siehst. es ist ein <b>Z O M B I E !!!</b> <br/><br/> Ganz klar, du must etwas tun, dich in Sicherheit bring, das Wesen aufhalten, den Zombie töten. Wie entscheidest du dich? Wähle mit Bedacht aber zögere nicht zu lange.";
  
  
//  0 = Was tust du? Bitte wählen",
//  1 = "Weglaufen",
//  2 = "Den Zombie mit bloßen Händen töten",
//  3 = "Mit der Gummiente vom Boden erschlagen.",
//  4 = "In den Hals beißen, bis der Zombie tot ist.",
//  5 = "Tot stellen",
//  6 = "Weg schleichen",


  /*       SELECT OPTIONS BEGIN    ----->
  ================================================================================ */ 

  var weaponSelect = document.getElementById("pullDown"); // <----- get Pull Down
  weaponSelect.style.display = ""; //<----------------------------- PULL DOWN VISIBLE
  weaponSelect.setAttribute("onchange", "checkCharacter()"); //<--- SetAttribute OnChange

  ////////////////////////////////////////////////////// <--------- Empty Pull Down
  var select = document.getElementById("pullDown");
  var length = select.options.length;
  for (var i = 0; i < length;) {
    select.options[i] = null;
    length = select.options.length;
  }
  //////////////////////////////////////////////////////<----------- Fill Pull Down
  for (var i = 0; i < situationWeapons.length; i++) {
    var option = situationWeapons[i];
    var element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    weaponSelect.appendChild(element);
    element = document.getElementById("pullDown");
    selectedSitationWeapon = element.options[element.selectedIndex].value;
  }
  
  /*       SELECT OPTIONS END    <-----
  ================================================================================ */
    
  var buttonGoOn = document.getElementById("goOnButton");
  buttonGoOn.style.display = "none"; //<--------------------------- GO ON BUTTON INVISIBLE
  buttonGoOn.textContent = "OK, weiter"; // <-- BTN
  buttonGoOn.addEventListener('click', getEnergyInjection);

  function getEnergyInjection() {
    weaponSelect = document.getElementById("pullDown"); // <--- GET PULLDOWN
    weaponSelect.addEventListener('selected', function(){
      //  0 = Was tust du? Bitte wählen"
      if (element.selectedIndex === 0) {
        document.getElementById("attention1").innerHTML = "Du hast leider die falsche Wahl getroffen. Nämlich gar keine. Du wirst sehen, was du davon hast...";
          weaponSelect.removeEventListener('selected');
          character.strength -= 5;
          character.health += 5;
          character.stealth += 5;
          checkCharacter();
      } else if (element.selectedIndex === 1) {
          weaponSelect.removeEventListener('selected');
          //  1 = "Weglaufen"
          character.strength -= 3;
          character.health += 2;
          character.stealth += 1;
          checkCharacter();
      } else if (element.selectedIndex === 2) {
          weaponSelect.removeEventListener('selected');
          //  2 = "Den Zombie mit bloßen Händen töten"
          character.strength -= 3;
          character.health -= 2;
          character.stealth -= 1;
          checkCharacter();
      } else if (element.selectedIndex === 3) {
          weaponSelect.removeEventListener('selected');
          //  3 = "Mit der Gummiente vom Boden erschlagen."
          character.strength -= 1;
          character.health -= 1;
          character.stealth -= 1;
          checkCharacter();
      } else if (element.selectedIndex === 4) {
          weaponSelect.removeEventListener('selected');
          //  4 = "In den Hals beißen, bis der Zombie tot ist."
          character.strength -= 3;
          character.health -= 2;
          character.stealth -= 1;
          checkCharacter();
      } else if (element.selectedIndex === 5) {
          weaponSelect.removeEventListener('selected');
          //  5 = "Tot stellen"
          character.strength -= 5;
          character.health -= 5;
          character.stealth -= 5;
          checkCharacter();
      } else {
          weaponSelect.removeEventListener('selected');
          //  6 = "Weg schleichen"
          character.strength += 0;
          character.health += 1;
          character.stealth += 2;
          checkCharacter();
      }
  });
}
}
function storyCarCrash() {
  'use strict';
  checkLive();
  
  document.getElementById("message").innerHTML="bin jetzt in storyCarCrash";

  
  var headline = document.getElementById("headline");//<--------- get ID headline
  var paragraphText = document.getElementById("textContent");//<- get ID textContent
  var randomButton = document.getElementById("randomButton");//<- get ID randomButton
  randomButton.style.display = "none"; //<----------------------- RANDOM BUTTON INVISIBLE
  
  // if (document.getElementById('goOnButton')) {
  //   var elem = document.getElementById("goOnButton");
  //   elem.parentNode.removeChild(elem);
  // } else {
  //   alert('Fehler: Kann kein Element mit der ID "goOnButton" finden');
  // }
  
  // 0 = Krankenhaus, ungewöhnlich still, zur Tür schleichen
  headline.textContent = "Dein Kopf tut echt weh, von dem Autounfall aber, " + characterName + ", der wird dir bald nicht mehr die einzigen Schmerzen bereiten." ;
  paragraphText.innerHTML = "Als du das Autowrack verlässt, bemerkst du in unmittelbarer Nähe ein Röchelen, Geräusche davon, dass irgendetwas über den Boden geschleift wird, Dumpfe immer wieder kehrende Stöße eines Körpers gegen ein Hindernis. Du blickst dich um und fällst du fast wieder zurück in das Autowrack. Dich ergreift Panik als du langsam gewahr wirst, was du vor dir siehst - etwas Menschenähnliches. Die Haut hängt in Fetzen, ein Arm baumelt nur noch an einem Strang von Sehnen. Im Flackern der Straßenlaternen, fällt es schwer zu erkennen, was da genau auf dich zu gekommen ist. Aber du bist dir sicher, dieses Wesen kennst du. Dieses Wesen darf es gar nicht geben. Es ist aus dem grausamen Filmen, die du so gerne siehst. es ist ein <b>Z O M B I E !!!</b> <br/><br/> Ganz klar, du must etwas tun, dich in Sicherheit bring, das Wesen aufhalten, den Zombie töten. Wie entscheidest du dich? Wähle mit Bedacht aber zögere nicht zu lange.";
  
  
//  0 = Was tust du? Bitte wählen",
//  1 = "Weglaufen",
//  2 = "Den Zombie mit bloßen Händen töten",
//  3 = "Mit der Gummiente vom Boden erschlagen.",
//  4 = "In den Hals beißen, bis der Zombie tot ist.",
//  5 = "Tot stellen",
//  6 = "Weg schleichen",


  /*       SELECT OPTIONS BEGIN    ----->
  ================================================================================ */ 

  var weaponSelect = document.getElementById("pullDown"); // <----- get Pull Down
  weaponSelect.style.display = ""; //<----------------------------- PULL DOWN VISIBLE
  weaponSelect.setAttribute("onchange", "checkCharacter()"); //<--- SetAttribute OnChange

  ////////////////////////////////////////////////////// <--------- Empty Pull Down
  var select = document.getElementById("pullDown");
  var length = select.options.length;
  for (var i = 0; i < length;) {
    select.options[i] = null;
    length = select.options.length;
  }
  //////////////////////////////////////////////////////<----------- Fill Pull Down
  for (var i = 0; i < situationWeapons.length; i++) {
    var option = situationWeapons[i];
    var element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    weaponSelect.appendChild(element);
    element = document.getElementById("pullDown");
    selectedSitationWeapon = element.options[element.selectedIndex].value;
  }
  
  /*       SELECT OPTIONS END    <-----
  ================================================================================ */
    
  var buttonGoOn = document.getElementById("goOnButton");
  buttonGoOn.style.display = "none"; //<--------------------------- GO ON BUTTON INVISIBLE
  buttonGoOn.textContent = "OK, weiter"; // <-- BTN
  buttonGoOn.addEventListener('click', getEnergyInjection);

  function getEnergyInjection() {
    weaponSelect = document.getElementById("pullDown"); // <--- GET PULLDOWN
    weaponSelect.addEventListener('selected', function(){
      //  0 = Was tust du? Bitte wählen"
      if (element.selectedIndex === 0) {
        document.getElementById("attention1").innerHTML = "Du hast leider die falsche Wahl getroffen. Nämlich gar keine. Du wirst sehen, was du davon hast...";
          weaponSelect.removeEventListener('selected');
          character.strength -= 5;
          character.health += 5;
          character.stealth += 5;
          checkCharacter();
      } else if (element.selectedIndex === 1) {
          weaponSelect.removeEventListener('selected');
          //  1 = "Weglaufen"
          character.strength -= 3;
          character.health += 2;
          character.stealth += 1;
          checkCharacter();
      } else if (element.selectedIndex === 2) {
          weaponSelect.removeEventListener('selected');
          //  2 = "Den Zombie mit bloßen Händen töten"
          character.strength -= 3;
          character.health -= 2;
          character.stealth -= 1;
          checkCharacter();
      } else if (element.selectedIndex === 3) {
          weaponSelect.removeEventListener('selected');
          //  3 = "Mit der Gummiente vom Boden erschlagen."
          character.strength -= 1;
          character.health -= 1;
          character.stealth -= 1;
          checkCharacter();
      } else if (element.selectedIndex === 4) {
          weaponSelect.removeEventListener('selected');
          //  4 = "In den Hals beißen, bis der Zombie tot ist."
          character.strength -= 3;
          character.health -= 2;
          character.stealth -= 1;
          checkCharacter();
      } else if (element.selectedIndex === 5) {
          weaponSelect.removeEventListener('selected');
          //  5 = "Tot stellen"
          character.strength -= 5;
          character.health -= 5;
          character.stealth -= 5;
          checkCharacter();
      } else {
          weaponSelect.removeEventListener('selected');
          //  6 = "Weg schleichen"
          character.strength += 0;
          character.health += 1;
          character.stealth += 2;
          checkCharacter();
      }
  });
}
}

function checkCharacter() {
  'use strict';
  
  var messageParagraph = document.getElementById("messageDiv");
  messageParagraph.style.display = "";
  document.getElementById("message").innerHTML="bin jetzt in checkCharacter";
  
  var headline = document.getElementById("headline");//<--------- get ID headline
  var paragraphText = document.getElementById("textContent");//<- get ID textContent
  var randomButton = document.getElementById("randomButton");//<- get ID randomButton
  randomButton.style.display = "none"; //<----------------------- RANDOM BUTTON INVISIBLE
  var select = document.getElementById("pullDown"); //<---------- get ID pullDown
  select.style.display = "none"; //<----------------------------- PULL DOWN INVISIBLE
  
  getEnergyValue();/////////<------------------------------------ CALL BLOCK FOR
  getDashboardValues();////<------------------------------------- CHECK & UPDATE VALUES
  checkLive();////////////<-------------------------------------- MUST STAY TOGETHER
  
  var buttonGoOn = document.getElementById("goOnButton"); //<---- get ID goOnButton

  headline.textContent = "Bist du noch am Leben?." ;
  if (character.energy <= 1.4) {
    paragraphText.innerHTML = "Ich glaube kaum. Deine Lebensenergie beträgt jetzt nur noch: " + character.energy + " Du hast hast jetzt die Wahl, du kanns wählen ob du sehen möchtest, ob du wirklich gestorben bist oder du startest die Story gleich von vorn mit dem RELOAD Schalter";
    buttonGoOn.style.display = ""; //<----------------------------- GO ON BUTTON VISIBLE
    buttonGoOn.textContent = "Ich bin stark, ich will's sehen."; // <-- BTN
    buttonGoOn.addEventListener('click', goingToDie);
  } else if (character.energy > 1.4 && character.energy < 4){
    paragraphText.innerHTML = "Scheint so. Da bist du dem Tod wohl gerade so eben noch mal von der Schippe gesprungen. Deine Lebensenergie beträgt jetzt gerade mal: " + character.energy;
    buttonGoOn.style.display = ""; //<----------------------------- GO ON BUTTON VISIBLE
    buttonGoOn.textContent = "Das wird schon, weiter..."; // <-- BTN
    buttonGoOn.addEventListener('click', storyPart2);
  } else {
    paragraphText.innerHTML = "Ja, bist du! Und das sogar noch mit guter Lebensenergie. Der Level deiner Lebensenergie ist nicht gerade gering: " + character.energy;
    buttonGoOn.style.display = ""; //<----------------------------- GO ON BUTTON VISIBLE
    buttonGoOn.textContent = "Dann mit Elan Weiter!"; // <-- BTN
    buttonGoOn.addEventListener('click', storyPart2);
  }
    
  
  
};
function checkCharacter2() {
  'use strict';
  
  var messageParagraph = document.getElementById("messageDiv");
  messageParagraph.style.display = "";
  document.getElementById("message").innerHTML="bin jetzt in checkCharacter2";
  
  var headline = document.getElementById("headline");//<--------- get ID headline
  var paragraphText = document.getElementById("textContent");//<- get ID textContent
  var randomButton = document.getElementById("randomButton");//<- get ID randomButton
  randomButton.style.display = "none"; //<----------------------- RANDOM BUTTON INVISIBLE
  var select = document.getElementById("pullDown"); //<---------- get ID pullDown
  select.style.display = "none"; //<----------------------------- PULL DOWN INVISIBLE
  
  getEnergyValue();/////////<------------------------------------ CALL BLOCK FOR
  getDashboardValues();////<------------------------------------- CHECK & UPDATE VALUES
  checkLive();////////////<-------------------------------------- MUST STAY TOGETHER
  
  var buttonGoOn = document.getElementById("goOnButton"); //<---- get ID goOnButton

  headline.textContent = "Bist du noch am Leben?." ;
  if (character.energy <= 1.4) {
    paragraphText.innerHTML = "Ich glaube kaum. Deine Lebensenergie beträgt jetzt nur noch: " + character.energy + " Du hast hast jetzt die Wahl, du kanns wählen ob du sehen möchtest, ob du wirklich gestorben bist oder du startest die Story gleich von vorn mit dem RELOAD Schalter";
    buttonGoOn.style.display = ""; //<----------------------------- GO ON BUTTON VISIBLE
    buttonGoOn.textContent = "Ich bin stark, ich will's sehen."; // <-- BTN
    buttonGoOn.addEventListener('click', goingToDie);
  } else if (character.energy > 1.4 && character.energy < 4){
    paragraphText.innerHTML = "Scheint so. Da bist du dem Tod wohl gerade so eben noch mal von der Schippe gesprungen. Deine Lebensenergie beträgt jetzt gerade mal: " + character.energy;
    buttonGoOn.style.display = ""; //<----------------------------- GO ON BUTTON VISIBLE
    buttonGoOn.textContent = "Das wird schon, weiter..."; // <-- BTN
    buttonGoOn.addEventListener('click', storyPart3);
  } else {
    paragraphText.innerHTML = "Ja, bist du! Und das sogar noch mit guter Lebensenergie. Der Level deiner Lebensenergie ist nicht gerade gering: " + character.energy;
    buttonGoOn.style.display = ""; //<----------------------------- GO ON BUTTON VISIBLE
    buttonGoOn.textContent = "Dann mit Elan Weiter!"; // <-- BTN
    buttonGoOn.addEventListener('click', storyPart3);
  }
};

function storyPart2() {
  'use strict';
  
  checkLive();
    
  document.getElementById("message").innerHTML="bin jetzt in storyPart2";
  
  var randomButton = document.getElementById("randomButton");//<- get ID randomButton
  randomButton.style.display = "none"; //<----------------------- RANDOM BUTTON INVISIBLE
  
  var headline = document.getElementById("headline");//<--------- get ID headline
  var paragraphText = document.getElementById("textContent");//<- get ID textContent
  var buttonGoOn = document.getElementById("goOnButton"); //<---- get ID goOnButton
  var background = document.getElementById('bodyImage'); //<----- get ID bodyImage
  background.style.backgroundImage = "url(img/zombie-945622_1920.jpg)"; //<-- SET BACKGROUND
  buttonGoOn.style.display = ""; //<----------------------------- GO ON BUTTON VISIBLE
  buttonGoOn.textContent = "Weiter..."; // <-- BTN
  buttonGoOn.addEventListener('click', checkCharacter2);

  headline.textContent = "Dein Weg führt in keine gute Zukunft." ;
  paragraphText.innerHTML = "Nach der letzten Begegenung konntest du dir einen Weg freikämpfen und bist erst einmal aus der Gefahrenzone. Die nächsten Fransenläufer erschrecken dich nicht mehr so ganz. Trotzdem, der Ausblick in die Zeit, die dein Leben dir noch übrig lässt, hätte ohne diese Wesen besser ausgesehen. <br> <br> Dein Weg ist einsam und die letzten Stunden hast du kaum wahrgenommen. Dein Unterbewusstsein scheint gut reagieren zu können und du weißt, wann du dich unsichtbar machen muss. <br><br> Hey, " + characterName + ", Ich glaube, du bist ein bisschen zu selbstsicher. Hinter jeder Ecke kann es zu einer noch gefährlicheren Situation kommen. Und so ist es. Hinter einem dürren Baum, steht eine noch schmalere Gestalt. Sie schein flink zu sein. Wie reagierst du?";
  
  /*       SELECT OPTIONS BEGIN    ----->
  ================================================================================ */ 

  var weaponSelect = document.getElementById("pullDown"); // <----- get Pull Down
  weaponSelect.style.display = ""; //<----------------------------- PULL DOWN VISIBLE
  weaponSelect.setAttribute("onchange", "checkCharacter2()"); //<--- SetAttribute OnChange

  ////////////////////////////////////////////////////// <--------- Empty Pull Down
  var select = document.getElementById("pullDown");
  select.style.display = "none";
  var length = select.options.length;
  for (var i = 0; i < length;) {
    select.options[i] = null;
    length = select.options.length;
  }
  //////////////////////////////////////////////////////<----------- Fill Pull Down
  for (var i = 0; i < situationWeapons.length; i++) {
    var option = situationWeapons[i];
    var element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    weaponSelect.appendChild(element);
    element = document.getElementById("pullDown");
    selectedSitationWeapon = element.options[element.selectedIndex].value;
  }
  
  /*       SELECT OPTIONS END    <-----
  ================================================================================ */
  
  getEnergyInjection();

  function getEnergyInjection() {
    weaponSelect = document.getElementById("pullDown"); // <--- GET PULLDOWN
    weaponSelect.addEventListener('selected', function(){
      //  0 = Was tust du? Bitte wählen"
      if (element.selectedIndex === 0) {
        document.getElementById("attention1").innerHTML = "Du hast leider die falsche Wahl getroffen. Nämlich gar keine. Du wirst sehen, was du davon hast...";
          weaponSelect.removeEventListener('selected');
          character.strength -= 0;
          character.health += 0;
          character.stealth += 0;
          checkCharacter2();
      } else if (element.selectedIndex === 1) {
          weaponSelect.removeEventListener('selected');
          //  1 = "Weglaufen"
          character.strength += 3;
          character.health += 3;
          character.stealth += 2;
          checkCharacter2();
      } else if (element.selectedIndex === 2) {
          weaponSelect.removeEventListener('selected');
          //  2 = "Den Zombie mit bloßen Händen töten"
          character.strength -= 3;
          character.health -= 2;
          character.stealth -= 1;
          checkCharacter2();
      } else if (element.selectedIndex === 3) {
          weaponSelect.removeEventListener('selected');
          //  3 = "Mit der Gummiente vom Boden erschlagen."
          character.strength -= 5;
          character.health -= 2;
          character.stealth -= 2;
          checkCharacter2();
      } else if (element.selectedIndex === 4) {
          weaponSelect.removeEventListener('selected');
          //  4 = "In den Hals beißen, bis der Zombie tot ist."
          character.strength -= 3;
          character.health -= 4;
          character.stealth -= 3;
          checkCharacter2();
      } else if (element.selectedIndex === 5) {
          weaponSelect.removeEventListener('selected');
          //  5 = "Tot stellen"
          character.strength -= 5;
          character.health -= 5;
          character.stealth -= 5;
          checkCharacter2();
      } else {
          weaponSelect.removeEventListener('selected');
          //  6 = "Weg schleichen"
          character.strength += 2;
          character.health += 0;
          character.stealth += 2;
          checkCharacter2();
      }
    });
  }
  
}

function storyPart3() {
  'use strict';
  
  checkLive();
    
  document.getElementById("message").innerHTML="bin jetzt in storyPart3";
  
  var randomButton = document.getElementById("randomButton");//<- get ID randomButton
  randomButton.style.display = "none"; //<----------------------- RANDOM BUTTON INVISIBLE
  
  var headline = document.getElementById("headline");//<--------- get ID headline
  var paragraphText = document.getElementById("textContent");//<- get ID textContent
  var buttonGoOn = document.getElementById("goOnButton"); //<---- get ID goOnButton
  var background = document.getElementById('bodyImage'); //<----- get ID bodyImage
  background.style.backgroundImage = "url(img/The_Walking_Dead_TV_441686.jpg)"; //<-- SET BACKGROUND
  buttonGoOn.style.display = ""; //<----------------------------- GO ON BUTTON VISIBLE
  buttonGoOn.textContent = "Weiter..."; // <-- BTN
  buttonGoOn.addEventListener('click', theEnd);

  headline.textContent = "Die Zombiedichte wird wieder größer." ;
  paragraphText.innerHTML = character.name + " Dieses Mal musst du es mit einer ganzen Horde aufnehmen, was wirst du machen?";
  
  /*       SELECT OPTIONS BEGIN    ----->
  ================================================================================ */ 

  var weaponSelect = document.getElementById("pullDown"); // <----- get Pull Down
  weaponSelect.style.display = ""; //<----------------------------- PULL DOWN VISIBLE
  weaponSelect.setAttribute("onchange", "checkCharacter()"); //<--- SetAttribute OnChange

  ////////////////////////////////////////////////////// <--------- Empty Pull Down
  var select = document.getElementById("pullDown");
  var length = select.options.length;
  for (var i = 0; i < length;) {
    select.options[i] = null;
    length = select.options.length;
  }
  //////////////////////////////////////////////////////<----------- Fill Pull Down
  for (var i = 0; i < situationWeapons.length; i++) {
    var option = situationWeapons[i];
    var element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    weaponSelect.appendChild(element);
    element = document.getElementById("pullDown");
    selectedSitationWeapon = element.options[element.selectedIndex].value;
  }
  
  /*       SELECT OPTIONS END    <-----
  ================================================================================ */
  
  getEnergyInjection();

  function getEnergyInjection() {
    weaponSelect = document.getElementById("pullDown"); // <--- GET PULLDOWN
    weaponSelect.addEventListener('selected', function(){
      //  0 = Was tust du? Bitte wählen"
      if (element.selectedIndex === 0) {
        document.getElementById("attention1").innerHTML = "Du hast leider die falsche Wahl getroffen. Nämlich gar keine. Du wirst sehen, was du davon hast...";
          weaponSelect.removeEventListener('selected');
          character.strength -= 5;
          character.health += 5;
          character.stealth += 5;
          checkCharacter();
      } else if (element.selectedIndex === 1) {
          weaponSelect.removeEventListener('selected');
          //  1 = "Weglaufen"
          character.strength += 4;
          character.health += 4;
          character.stealth += 2;
          checkCharacter();
      } else if (element.selectedIndex === 2) {
          weaponSelect.removeEventListener('selected');
          //  2 = "Den Zombie mit bloßen Händen töten"
          character.strength -= 6;
          character.health -= 6;
          character.stealth -= 6;
          checkCharacter();
      } else if (element.selectedIndex === 3) {
          weaponSelect.removeEventListener('selected');
          //  3 = "Mit der Gummiente vom Boden erschlagen."
          character.strength -= 6;
          character.health -= 8;
          character.stealth -= 8;
          checkCharacter();
      } else if (element.selectedIndex === 4) {
          weaponSelect.removeEventListener('selected');
          //  4 = "In den Hals beißen, bis der Zombie tot ist."
          character.strength -= 8;
          character.health -= 8;
          character.stealth -= 8;
          checkCharacter();
      } else if (element.selectedIndex === 5) {
          weaponSelect.removeEventListener('selected');
          //  5 = "Tot stellen"
          character.strength -= 8;
          character.health -= 8;
          character.stealth -= 8;
          checkCharacter();
      } else {
          weaponSelect.removeEventListener('selected');
          //  6 = "Weg schleichen"
          character.strength += 2;
          character.health += 1;
          character.stealth += 2;
          checkCharacter();
      }
    });
  }
  
}


function theEnd() {
  'use strict';
  var background = document.getElementById('bodyImage'); //<----- get ID bodyImage
  background.style.backgroundImage = "url(img/266598.jpg)"; //<-- SET BACKGROUND
  var headline = document.getElementById("headline");
  var paragraphText = document.getElementById("textContent");
  var randomButton = document.getElementById("randomButton");
  randomButton.style.display = "none"; // <-------- RANDOM BUTTON INVISIBLE
  var select = document.getElementById("pullDown"); // <--- PULL DOWN ON
  select.style.display = "none"; // <----------------- PULL DOWN INVISIBLE
  var buttonGoOn = document.getElementById("goOnButton");
  buttonGoOn.style.display = "none"; // <-----------------  GO ON BUTTON INVISIBLE
  
  headline.textContent = "Hier ist das Ende" ;
  paragraphText.textContent = "Tut mir leid, " + characterName + ", wir sind hier vorerst am Ende der Reise. Wenn das Spiel weiter ausgebaut ist, gibt es auch mehr Teile der Geschichte.";
  
  document.getElementById("message").innerHTML = character.characterClass;
  
  getEnergyValue();/////////<--CHECK & UPDATE VALUES
  getDashboardValues();////<---CHECK & UPDATE VALUES
  checkLive();////////////<----CHECK & UPDATE VALUES
  
  buttonGoOn.style.display = "none"; // <-----------------  GO ON BUTTON INVISIBLE
  document.getElementById("reloadButton").style.display = ""; // <----- RELOAD BUTTON VISIBLE
}




























