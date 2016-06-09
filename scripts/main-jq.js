$(document).ready(function() {

  theStory();
    
});

function theStory() {
  
    var $dashboard = $('#dashboard');
    var $health = $('#health');
    var $stealth = $('#stealth');
    var $strength = $('#strenght');
    var $energy = $('#energy');
  
    var $background = $('#body');
    var $goOnButton = $('#goOnButton');
    var $headline = $('#headline');
    var $textContent = $('#textContent');
    var $mySelect = $('#pullDown');
    var $reloadButton = $('#reloadButton');
    var $gaugetimer = $('p#gauge-timer');
    var $gaugetoggle = $('#gauge-toggle');
    var $contentDiv = $( "#contentDiv" );
    
    var chealth = 0;
    var cstrength = 0;
    var cstealth = 0;
    
    var character = {
        name: "Irgendein Name",
        health: 5,
        strength: 0,
        stealth: 0,
        energy: 0,
        characterClass: "default",
    };
    
    var selectedOption;
    
    var storyTextIntro = {
        hl: "Zombies warten auf dich.",
        copy: 'Heute ist der Tag etwas anders als sonst. Du bist an einem Ort Aufgewacht, den du nicht kennst, du hörst Geräusche, die es eigentlich nur im Kino geben sollte, dein Kopf schmerzt ohne Grund und um dich herum sieht alles trostlos und verfallen aus. Und schnell wird dir auch klar, warum ab heute alles anders ist. Die Erklärung kommt gerade um die Ecke und sieht keineswegs freundlich aus. <br><br>Viele Grüße aus dem Jenseits, du wirst von einem Zombie angegriffen. Bist du bereit, um dein Leben zu kämpfen?. ...Ach übrigens, du hast für deine Entscheidungen immer nur wenig Zeit. Zu Anfang wirst du jedoch mehr Zeit haben als später, wenn du weiter fortgeschritten bist. Lässt du dir zu viel Zeit, gibt es Abzüge, die unter Umständen tödlich sien können.',
        button: "Die tödliche Reise kann beginnen.",
        dropvis: false,
        dropDownOptions: {
          opt0: "Bitte wählen",
          opt1: "Option 1 in Story Intro",
          opt2: "Option 2 in Story Intro",
          opt3: "Option 3 in Story Intro",
          opt4: "Option 4 in Story Intro",
          opt5: "Option 5 in Story Intro"
        },
        injection: {
          opt0: {
            health:   4,
            strength: 0,
            stealth:  0
          },
          opt1: {
            health:   1,
            strength: 11,
            stealth:  111
          },
          opt2: {
            health:   2,
            strength: 22,
            stealth:  222
          },
          opt3: {
            health:   3,
            strength: 33,
            stealth:  333
          },
          opt4: {
            health:   4,
            strength: 44,
            stealth:  444
          },
          opt5: {
            health:   5,
            strength: 55,
            stealth:  555
          }
        },
        thinkingTime: 20,
        background: '000.jpg'
    };
    
    var storyText01 = {
        hl: "Deine erste Herausforderung",
        copy: "Der Zombie kommt auf dich zu, er greift dich offensichtlich an. Was tust du? Wirst du dich verteidigen oder die Beine in die Hand nehmen? Lass dir nicht zu viel Zeit mit deiner Entscheidung.",
        button: "Weiter.",
        dropvis: true,
        dropDownOptions: {
          opt0: "Bitte wählen",
          opt1: "Ich renne weg.",
          opt2: "Ich renne ihn um.",
          opt3: "Ich weiche aus.",
          opt4: "Ich haue ihn mit den bloßen Händen KO",
          opt5: "Ich nehme den Speer vom Boden und durchbohre seinen Kopf."
        },
        injection: {
          opt0: {
            health:   -1,
            strength: -1,
            stealth:  -1
          },
          opt1: {
            health:   1,
            strength: 0,
            stealth:  1
          },
          opt2: {
            health:   -1,
            strength: 0,
            stealth:  -1
          },
          opt3: {
            health:   -1,
            strength: -1,
            stealth:  -1
          },
          opt4: {
            health:   -1,
            strength: -1,
            stealth:  -1
          },
          opt5: {
            health:   2,
            strength: 2,
            stealth:  1
          }
        },
        thinkingTime: 22,
        background: '001.jpg'
        
    };
    var storyText02 = {
        hl: "Keine Zeit für Shopping",
        copy: "Prima, bis hier hin bist du schon mal gekommen. Schaue des Öfteren auf deinen Energy-Level. Dann weißt du immer, wann du ein Risiko eingehen kannst. <br><br>Aber die Geschichte geht weiter. Also....die Läden haben zwar seit gestern 24 Stunden geöffnet aber die Regale sind leer. Die Plünderer haben ganze Arbeit geleistet. Du kannst es gern versuchen, aber du weißt nicht, was dich zwischen den Regalen erwartet. A propos Gang: die Straße ist hier etwas breiter. Dafür sind hier aber auch viel mehr Gestalten als anderorts unterwegs. Du triffst jetzt deine zweite Wahl, die dir dein Leben retten kann. Du musst eigentlich nur gerade aus. In zwei Kilometern Entfernung liegt der nächste Punkt, den du erreichen musst. Aber geradeaus geht halt nicht. Da sind zu viele Fransenköppe. Welchen Weg wirst du gehen?",
        button: "Bitte weiter.",
        dropvis: true,
        dropDownOptions: {
          opt0: "Bitte wählen",
          opt1: "Ganz klar: immer an der Wand lang.",
          opt2: "In der linken Parallelstraße sieht es weniger bevölkert aus. Die nehme ich.",
          opt3: "Was weiß ich. Ich gehe trotzdem geradeaus.",
          opt4: "Auf der rechten Seite scheint eine Möglichkeit über die Dächer zu bestehen...",
          opt5: "Ich hoffe auf eine Verbindung der Keller der Häuser auf der rechten Seite..."
        },
        injection: {
          opt0: {
            health:   -1,
            strength: -1,
            stealth:  -1
          },
          opt1: {
            health:   -1,
            strength: 0,
            stealth:  0
          },
          opt2: {
            health:   1,
            strength: 0,
            stealth:  0
          },
          opt3: {
            health:   -3,
            strength: -2,
            stealth:  -1
          },
          opt4: {
            health:   0,
            strength: 0,
            stealth:  2
          },
          opt5: {
            health:   0,
            strength: 0,
            stealth:  1
          }
        },
        thinkingTime: 20,
        background: '002.jpg'
    };
    var storyText03 = {
        hl: "Ausgerechnet jetzt musst du Onkel Freddy besuchen.",
        copy: "Du weißt schon, dass Freddy Kruger kein Traum war, oder? Er war einer der ersten weltberühmten Zombies. Er ist irgendwann verschwunden und nicht wieder aufgetaucht. So sagt man. Keiner weiß, wo er abgeblieben ist. Sollte er noch herumirren, dann musst du dich bei seinen Enkeln hier auf was gefasst machen. Übrigens der Herr vor dir, war schon zu Lebzeiten, kein Spaß. Also, was wirst du tun?",
        button: "Weiter.",
        dropvis: true,
        dropDownOptions: {
          opt0: "Bitte wählen",
          opt1: "Ich rufe Freddy um Hilfe.",
          opt2: "Sie wissen, dass wir irgndwie verwand sind und lassen mich in Ruhe.",
          opt3: "Mit einer Zaunstange steche ich sie nacheinander ins Jenseits.",
          opt4: "Ein kleiner Grabstein hilft mir beim klären der Situation.",
          opt5: "Ich will keinen Ärger und schleiche mich davon."
        },
        injection: {
          opt0: {
            health:   -1,
            strength: -1,
            stealth:  -1
          },
          opt1: {
            health:   -3,
            strength: -3,
            stealth:  -3
          },
          opt2: {
            health:   -3,
            strength: -3,
            stealth:  -5
          },
          opt3: {
            health:   2,
            strength: 1,
            stealth:  0
          },
          opt4: {
            health:   1,
            strength: 1,
            stealth:  0
          },
          opt5: {
            health:   0,
            strength: 0,
            stealth:  1
          }
        },
        thinkingTime: 18,
        background: '003.jpg'
    };
    var storyText04 = {
        hl: "Im Bahnhof fährt kein Zug mehr.",
        copy: "Es scheint so, als sind deine Füße deine besten Kumpels. Pass auf sie auf, dass halten sie zu dir. So, das war mein kluger Spruch des Tages aber jetzt kommen wir mal zum Ernst der Lage. Du siehst, hier ist es überall dunkel, manche Gestalten tauchen unerwartet auf, manche hängen fest, wie man eben irgendwo festhängen kann. Dein Fleisch wollen sie aber alle. Es gibt nur einen Weg, um hier weiter zu kommen. Du musst auf dem einen GLeis, das noch einen schmalen Pfad bereit hält, dein Glück versuchen, durch die verstreuten Zombies zu kommen. Hier liegen ein paar mögliche Waffen für dich rum. Beeil dich, welche Wahl wirst du treffen?",
        button: "Weiter.",
        dropvis: true,
        dropDownOptions: {
         opt0: "Bitte wählen",
          opt1: "Ich nehme den Stein.",
          opt2: "Es wird das Küchenmesser.",
          opt3: "Nichts geht über einen Nassrasierer.",
          opt4: "Die Astsäge wird mir gute Hilfe leisten.",
          opt5: "Die beiden Fahrradketten sind perfekt und meine Wahl."
        },
        injection: {
          opt0: {
            health:   -1,
            strength: -1,
            stealth:  -1
          },
          opt1: {
            health:   1,
            strength: 0,
            stealth:  0
          },
          opt2: {
            health:   0,
            strength: 0,
            stealth:  0
          },
          opt3: {
            health:   -3,
            strength: -1,
            stealth:  0
          },
          opt4: {
            health:   1,
            strength: 1,
            stealth:  0
          },
          opt5: {
            health:   1,
            strength: 1,
            stealth:  0
          }
        },
        thinkingTime: 13,
        background: '004.jpg'
    };
    var storyText05 = {
        hl: "Eine weitere gefährliche Gegend wartet auf dich",
        copy: "Aber dieses mal wird es nicht so leicht, wie bisher. Die breite Straße in dem ehemaligen Hochhausgetto ist voll mit Bergen von Müll, kaputten Autos, Schrott, Schutt und sonstigem Unrat. Du musst einige Hindernisse überwinden. Aber das ist nicht das Problem an sich, es sind die hemealigen Einwohner der Nachbarschaft, die schon zu Lebzeiten niemanden leiden konnten. Sie sind schnell, aggressiv und ausdauernd. Deine Zeit scheint abgelaufen zu sein, bevor du etwas tun kannst. <br><br> Das sollte man zumindest denken, wenn man keinen Mumm hat. A propos Mumm, da fliegen so einige Falschen aus den Häusern, darunter könnten auch ein paar Sektflaschen sein. Aber ich glaube, das ist egal. Gefährlich sind die Wurfgeschosse allemal. Also überlege gut und vor allem schnell, wie du aus dieser Situation raus kommst.",
        button: "Manchmal muss es eben mit Mumm sein, weiter!.",
        dropvis: true,
        dropDownOptions: {
          opt0: "Bitte wählen",
          opt1: "Ich nehme den stabilen Regenschirm",
          opt2: "Da hinten liegen paar Turnschuhe, damit kann ich sicherlich schneller laufen, die sind meine und ich laufe weg.",
          opt3: "Wer will schon ewig leben, ich niste mich in einer der freien Wohnungen ein.",
          opt4: "Ich versuche ein Auto zum Laufen zu bringen.",
          opt5: "Einfach Augen zu und durch die Mitte rennen."
        },
        injection: {
          opt0: {
            health:   -1,
            strength: -1,
            stealth:  -1
          },
          opt1: {
            health:   2,
            strength: 2,
            stealth:  1
          },
          opt2: {
            health:   0,
            strength: 1,
            stealth:  1
          },
          opt3: {
            health:   -5,
            strength: -5,
            stealth:  -5
          },
          opt4: {
            health:   -1,
            strength: -1,
            stealth:  0
          },
          opt5: {
            health:   -2,
            strength: -2,
            stealth:  -1
          }
        },
        thinkingTime: 13,
        background: '005.jpg'
    };    
    var storyText06 = {
        hl: "Vom Regen in die traufe, hier war wohl eine Goa-Party...",
        copy: "So voll, wie auf einem Festival ist es hier jedenfalls schon. Nur die Musik fehlt und die Pillen. Aber eine Pille würde jetzt vermutlich eh nicht helfen. Die Fransenköppe laufen hier dicht an dich und es gibt keine freie Fläche zum Verschnaufen. Ich glaube, dass du hier definitiv aufgeben solltest. Lass dich beißen und schließe dich der Sekte der Zombies mit schlechtem Atem an. Oder? Überlege noch schneller und moch besser, was du tun wirst. Jetzt!",
        button: "Ab dafür.",
        dropvis: true,
        dropDownOptions: {
          opt0: "Bitte wählen",
          opt1: "Ich tanze mich unsichtbar.",
          opt2: "Ich krieche auf allen vieren zwischen den Beinen der Trottel bis ich freie Bahn habe.",
          opt3: "Ein paar umherliegende Überreste werden mir helfen, mich geruchsmäßig unsichtbar zu machen.",
          opt4: "Mit viel Kraft und Schnelligkeit, könnte ich es vielleicht schaffen, mich durch die Menge zu drängen.",
          opt5: "Ich hake mich bei ein paar Typen ein und tue so, als ob ich einer von ihnen wäre."
        },
        injection: {
          opt0: {
            health:   -1,
            strength: -1,
            stealth:  -1
          },
          opt1: {
            health:   -5,
            strength: -5,
            stealth:  -5
          },
          opt2: {
            health:   -2,
            strength: -2,
            stealth:  0
          },
          opt3: {
            health:   0,
            strength: 1,
            stealth:  2
          },
          opt4: {
            health:   0,
            strength: -1,
            stealth:  0
          },
          opt5: {
            health:   -4,
            strength: -2,
            stealth:  -5
          }
        },
        thinkingTime: 12,
        background: '006.jpg'
    };
    var storyText07 = {
        hl: "Jetzt wird es unübersichtlich. Was ist da passiert.",
        copy: "Du triffst auf einen Gefangenentransporter. Ein ehemaliger Schulbus. Fast wie im Film. Du hörst, dass in dem Bus gekämpft wird. Und ganz deutlich sind auch die typischen Laute und Geräusche von Zombies zu vernehmen. Allerdings hast du auch einen Schuss gehört. Wer weiß, was das zu bedeuten hat. <br><br> Die Situation sieht also folgendermaßen aus: Der Schuss könnte von einem Mensche verursacht worden sein, der auf einen Zombie geschossen hat. Es könnte auch sein, dass dieser Mensch ein ehemaliger Gefangener ist und kein Polizist, der den Transport begleitet hat. Weiterhin kann es sein, dass dieser Gefangene, der vielleicht geschossen hat, Mörder von Beruf ist und nicht vor hat, das in Zukunft aufzugeben. Er könnte also eine Bedrohung für dich sein. Es könnte auch sein, dass es nicht nur einer ist, der da gegen Zombies kämpft. Und es könnte sein, dass sowohl Mensch als auch Zombie dir nach dem Leben trachten. <br><br> Es könnte jedoch auch sein, dass der Schuss von einem Polizisten ausgelöst wurde und du einen wohlgesonnenen Mitmenschen in dem Bus findest. Vielleicht ist er auch in großer Bedrängnis und da ist keine Hilfe für edich drin. <br><br> Was auch immer, du muss dir überlegen, was du jetzt tun wirst.",
        button: "Weiter.",
        dropvis: true,
        dropDownOptions: {
          opt0: "Bitte wählen",
          opt1: "Ich schleiche mich an und überlege dann, was zu tun ist.",
          opt2: "Ich gehe davon aus, dass es zu gefährlich ist und laufe davon.",
          opt3: "Ich rufe, damit man hören kann, dass ich kein Zombie bin und gehe hin um zu helfen.",
          opt4: "Ich warte ab, was passiert.",
          opt5: "Ich laufe wieder zurück."
        },
        injection: {
          opt0: {
            health:   -1,
            strength: -1,
            stealth:  -1
          },
          opt1: {
            health:   -3,
            strength: 0,
            stealth:  1
          },
          opt2: {
            health:   1,
            strength: -3,
            stealth:  1
          },
          opt3: {
            health:   1,
            strength: 2,
            stealth:  2
          },
          opt4: {
            health:   -3,
            strength: -1,
            stealth:  -3
          },
          opt5: {
            health:   -5,
            strength: -5,
            stealth:  -5
          }
        },
        thinkingTime: 16,
        background: '007.jpg'
    };
    var storyTextEnd = {
        hl: "Du hast es wirklich geschaft.",
        copy: "Die letzte Prüfung scheinst du ebenfalls überstanden zu haben. Es waren tatsächlich Gefangene, die auf Zombies geschossen haben - ehemalige Polizisten. Aber es waren keine Mörder oder sonstige Schwerverbrecher. Von daher hattest du wenig zu befürchten. Nur die Zombies in dem Bus und der Umgebung wären unegsund gewesen aber jetzt seid ihr zu viert und könnt viel mehr ausrichten. Sucht nach weiteren Menschen im Kampf gegen die Zombies. Lasst euch die Welt nicht nehmen. ;-). Viel Spaß im Richtigen Leben.",
        button: "OK.",
        dropvis: false,
        dropDownOptions: {
          opt0: "Bitte wählen",
          opt1: "Option 1 in Story 5",
          opt2: "Option 2 in Story 5",
          opt3: "Option 3 in Story 5",
          opt4: "Option 4 in Story 5",
          opt5: "Option 5 in Story 5"
        },
        injection: {
          opt0: {
            health:   0,
            strength: 0,
            stealth:  0
          },
          opt1: {
            health:   0,
            strength: 0,
            stealth:  0
          },
          opt2: {
            health:   0,
            strength: 0,
            stealth:  0
          },
          opt3: {
            health:   0,
            strength: 0,
            stealth:  0
          },
          opt4: {
            health:   0,
            strength: 0,
            stealth:  0
          },
          opt5: {
            health:   0,
            strength: 0,
            stealth:  0
          }
        },
        thinkingTime: 50,
        background: '008.jpg'
    };
    var storyGoingToDie = {
        hl: "Du bist leider gestorben",
        copy: "Es tut mir leid, deine Energie reicht einfach nicht mehr zum Überleben. Deine letzte Entscheidung war wohl nicht deine beste. Du bist jetzt tot. Dein Energielevel betrug zum Schluss nur noch: " + character.energy + ". <br><br> Übrigens, vielleicht bist du auch einfach nur gestorben, weil du bei den Auswahlmöglichkeiten keine ausgewählt und direkt auf weiter geklickt hast. Vielleicht hast du auch einfach nur getrödelt und deine Zeit war abgelaufen. Das gibt ion jedem Fall Abzüge bei deinen Stärke-Leveln (jeweil 2 Punkte Abzug). Das wird natürlich nicht belohnt, sondern gibt Abzüge in der B-Note deines Lebens. ;-) <br><br> Ich drücke dir die Daumen für das nächste Mal. Du kannst jetzt 'reload' anklicken um neu zu beginnen.",
        button: "Reload",
        dropvis: false,
        dropDownOptions: {
          opt0: "Reload",
          opt1: "Option 1 in Story 5",
          opt2: "Option 2 in Story 5",
          opt3: "Option 3 in Story 5",
          opt4: "Option 4 in Story 5",
          opt5: "Option 5 in Story 5"
        },
        energy: { 
          health: 4,
          stealth: 0,
          strength: 0
        },
        injection: {
          opt0: {
            health:   0,
            strength: 0,
            stealth:  0
          },
          opt1: {
            health:   1,
            strength: 11,
            stealth:  111
          },
          opt2: {
            health:   2,
            strength: 22,
            stealth:  222
          },
          opt3: {
            health:   3,
            strength: 33,
            stealth:  333
          },
          opt4: {
            health:   4,
            strength: 44,
            stealth:  444
          },
          opt5: {
            health:   5,
            strength: 55,
            stealth:  555
          }
        },
        thinkingTime: 500000,
        background: '001.jpg'
    };
    
    var selectMenu = function(options) {
        $mySelect.empty();
        $.each(options, function(property, value) {
          /* ------------------------------------------------------------------------- //
          |  For getting the name of the propert later for the switch statement it      |
          |  is necessary to submit it in the .val() object with .val(property)         |
          |  otherwise only the value soud be read out of the selected option.          |
          |  This would be pain for writing the switch statement                        |
          *///------------------------------------------------------------------------ //
          var $pulldownOptions = $("<option></option>").val(property).text(value);
          $mySelect.append($pulldownOptions);
        });
      };
    var getSelectValue = function(sel) {
      selectedOption = sel.select().val();
      $mySelect.empty();
    };
    
    // IntervID necessary for setting back the timer for the next level in game
    var nIntervId;
    
    // Timer for time injection
    var timer = function (t) {
    
      var i = t;
      var timeCountdown = function () {
        //var nIntervId;
        
        var countDown = function (){
          nIntervId = setInterval(function() {
              updateCounter();
              i = i - 1;
      
              if (i <= 0) {
                  clearTimeout(nIntervId);
                  timeInject(t);
                  
              }
      
          }, 1000);
        }
        
        var updateCounter = function () {
          $gaugetimer.text("Timer: " + i);
        };
        countDown();
        
        var stopTimer = function () {
          clearInterval(nIntervId);
        };
        $goOnButton.on('click', stopTimer);
        
      };
    timeCountdown();
    };
    
    // Injection of time lost if over time
    var timeInject = function (t) {
      var givenTime = t;
        character.health = character.health - 2;
        character.strength = character.strength - 2;
        character.stealth = character.stealth - 2;
        updateEnergyLevel();
        checkEnergyLevel();
        //console.log("Du hast mehr als " + givenTime + " Sekunden benötigt! Das gibt Abzüge bei deiner Gesundheit");
        
        $('#messageDiv').show().html("Du hast mehr als " + givenTime + " Sekunden benötigt! Das gab Abzüge bei deiner Gesundheit. Health, Strength und Stealth wurden jeweils um 2 Punkte gemindert. Damit hast du jetzt nur noch einen Energielevel von: " + character.energy.toFixed(1));
        
        clearInterval(nIntervId);
        $gaugetimer.text("Timer: " + 0);

      };
      
    var checkEnergyLevel = function () {
      $dashboard.slideDown('slow');
      $health.text('Health: ' + character.health);
      $stealth.text('Stealth: ' + character.stealth);
      $strength.text('Strength: ' + character.strength);
      $energy.text('Energy-Level: ' + character.energy.toFixed(1));
      if(character.energy < 1.3) {
        console.log("character.energy ist zu niedrig: " + character.energy);
        goingToDie();
      }
    }
    
    var updateEnergyLevel = function () {
      var eHealth = character.health;
      var eStrength = character.strength;
      var eStealth = character.stealth;
      
      character.energy = (eHealth + eStrength + eStealth) / 3;
    }
    
    var injectionByStory;
    
    
      // ***********************
      // DROPDOWN - Version 01 *
      // ***********************
      // ---------------------------------------------------
      // Dropdon list with options from storyText variable
      // and switch statement if dropdown is available
      // |
      // | Control flows of different kinds for probing the best solution:
      // |
      // CONTROL FLOW 01 --> SWITCH STATEMENT
      var selectSwitch = function(injct) {
        // Switch statement for selected options and 
        console.log("Was gibt die Variable 'selectedOption' aus? Antwort: " + selectedOption);
        
        switch (selectedOption) {
          case 'opt0':
            console.log("---------> Option 0 gewählt");
            // character.health += inj.opt0.health;
            // character.strength += inj.opt0.strength;
            // character.stealth += inj.opt0.stealth;
            // console.log("hlth: " + character.health + ", strg: " + character.strength + ", stlt: " + character.stealth);
            // break;
          case 'opt1':
            console.log("---------> Option 1 gewählt");
            character.health += injct.opt1.health;
            character.strength += injct.opt1.strength;
            character.stealth += injct.opt1.stealth;
            //console.log("hlth: " + character.health + ", strg: " + character.strength + ", stlt: " + character.stealth);
            break;
          case 'opt2':
            console.log("---------> Option 2 gewählt");
            character.health += injct.opt2.health;
            character.strength += injct.opt2.strength;
            character.stealth += injct.opt2.stealth;
            //console.log("hlth: " + character.health + ", strg: " + character.strength + ", stlt: " + character.stealth);
            break;
          case 'opt3':
            console.log("---------> Option 3 gewählt");
            character.health += injct.opt3.health;
            character.strength += injct.opt3.strength;
            character.stealth += injct.opt3.stealth;
            //console.log("hlth: " + character.health + ", strg: " + character.strength + ", stlt: " + character.stealth);
            break;
          case 'opt4':
            console.log("---------> Option 4 gewählt");
            character.health += injct.opt4.health;
            character.strength += injct.opt4.strength;
            character.stealth += injct.opt4.stealth;
            //console.log("hlth: " + character.health + ", strg: " + character.strength + ", stlt: " + character.stealth);
            break;
          case 'opt5':
            console.log("---------> Option 5 gewählt");
            character.health += injct.opt5.health;
            character.strength += injct.opt5.strength;
            character.stealth += injct.opt5.stealth;
            //console.log("hlth: " + character.health + ", strg: " + character.strength + ", stlt: " + character.stealth);
            break;
          default:
            // updateEnergyLevel();
        }
          
      };
    
    
    // Toggle for content div to be able to see backgr picture
    $gaugetoggle.click(function() {     
       $contentDiv.slideToggle(1000, function() {
         console.log("toggled");
       });
    });
    
    $goOnButton.on("mouseup", function(){
      console.log("Ausgewählt: " + selectedOption);
      // console.log("On Click: " + $mySelect.val());
      getSelectValue($mySelect);
      console.log("Inhalt von Select nach Button-Click: " + selectedOption)
      $mySelect.empty();
      console.log("Ist Select jetzt leer? :" + selectedOption)
      updateEnergyLevel();
      selectSwitch(injectionByStory);
    });
  
// ===================================== START OF FUNCTION "STORY" ======================
    
    var story = function (hl, copy, btn, dropdownvis, dropopt, inj, thinktime, bgr, dest) {
      
      injectionByStory = inj;
      
      $gaugetimer.hide();
      $gaugetimer.show('slow');
      var time = thinktime;

      // Calling timer global function for time injection
      timer(time);
      
      // Text section with content from storyText variable
      $headline.html(hl).fadeIn( "slow" );
      $textContent.html(copy).fadeIn( "slow" );
      var bgrImage = "pics/" + bgr;
      

      // Background image with content from storyText variable
      $background.css('background-image', 'url(' + bgrImage + ')'); 
      
      // ***********************
      // DROPDOWN - Version 02 *
      // ***********************
      // | This control flow wasn't better than the switch statement
      // | so I decided to let it stay as an example but not for use.
      // |
      // | ---------------------------------------------------
      // Dropdown list with options from storyText variable
      // and switch statement if dropdown is available
      // if(dropdownvis === true) {
      //   // Switch statement for selected options and 

      //   switch (selectedOption) {
      //   case 'opt0':
      //     console.log("---------> Option 0 gewählt");
      //     // character.health += inj.opt0.health;
      //     // character.strength += inj.opt0.strength;
      //     // character.stealth += inj.opt0.stealth;
      //     // console.log("hlth: " + character.health + ", strg: " + character.strength + ", stlt: " + character.stealth);
      //     // break;
      //   case 'opt1':
      //     console.log("---------> Option 1 gewählt");
      //     character.health += inj.opt1.health;
      //     character.strength += inj.opt1.strength;
      //     character.stealth += inj.opt1.stealth;
      //     console.log("hlth: " + character.health + ", strg: " + character.strength + ", stlt: " + character.stealth);
      //     break;
      //   case 'opt2':
      //     console.log("---------> Option 2 gewählt");
      //     character.health += inj.opt2.health;
      //     character.strength += inj.opt2.strength;
      //     character.stealth += inj.opt2.stealth;
      //     console.log("hlth: " + character.health + ", strg: " + character.strength + ", stlt: " + character.stealth);
      //     break;
      //   case 'opt3':
      //     console.log("---------> Option 3 gewählt");
      //     character.health += inj.opt3.health;
      //     character.strength += inj.opt3.strength;
      //     character.stealth += inj.opt3.stealth;
      //     console.log("hlth: " + character.health + ", strg: " + character.strength + ", stlt: " + character.stealth);
      //     break;
      //   case 'opt4':
      //     console.log("---------> Option 4 gewählt");
      //     character.health += inj.opt4.health;
      //     character.strength += inj.opt4.strength;
      //     character.stealth += inj.opt4.stealth;
      //     console.log("hlth: " + character.health + ", strg: " + character.strength + ", stlt: " + character.stealth);
      //     break;
      //   case 'opt5':
      //     console.log("---------> Option 5 gewählt");
      //     character.health += inj.opt5.health;
      //     character.strength += inj.opt5.strength;
      //     character.stealth += inj.opt5.stealth;
      //     console.log("hlth: " + character.health + ", strg: " + character.strength + ", stlt: " + character.stealth);
      //     break;
      //   default:
      //     // updateEnergyLevel();
      //   }
          
      // }
      // | ---------------------------------------------------
      // |
      // | -------------------------------------------------
      // |
      // CONTROL FLOW 02 --> OBJECT LITERAL
      // No better solution than FLOW 01 :-(
      // | -------------------------------------------------
      // var sel = selectedOption;
      // var sel = 'opt1';
      // console.log("sel hat folgenden Inhalt: " + sel);
      //
      // var selectObjectFlow = {
      //   'opt0': function () {
      //     console.log("---------> Option 0 gewählt");
      //   },
      //   'opt1': function () {
      //     console.log("---------> Option 1 gewählt");
      //   },
      //   'opt2': function () {
      //     console.log("---------> Option 2 gewählt");
      //   },
      //   'opt3': function () {
      //     console.log("---------> Option 3 gewählt");
      //   },
      //   'opt4': function () {
      //     console.log("---------> Option 4 gewählt");
      //   },
      //   'opt5': function () {
      //     console.log("---------> Option 5 gewählt");
      //   }
      // };
      //
      // selectObjectFlow[sel]();
      // selectObjectFlow[sel] ();
      // |
      // | -------------------------------------------------
      // |
      // CONTROL FLOW 03 --> OBJECT LITERAL
      // As well no better solution than FLOW 01 :-(
      // ---------------------------------------------------
      // var sel = selectedOption;
      // function selectObjectFlow (opt) {
      //   var objects = {
      //     'opt0': function () {
      //       console.log("---------> Option 0 gewählt");
      //     },
      //     'opt1': function () {
      //       console.log("---------> Option 1 gewählt");
      //     },
      //     'opt2': function () {
      //       console.log("---------> Option 2 gewählt");
      //     },
      //     'opt3': function () {
      //       console.log("---------> Option 3 gewählt");
      //     },
      //     'opt4': function () {
      //       console.log("---------> Option 4 gewählt");
      //     },
      //     'opt5': function () {
      //       console.log("---------> Option 5 gewählt");
      //     },
      //     'default': function () {
      //       console.log("---------> Option default gewählt");
      //     }
      //   };
      //   return (objects[opt] || objects['default'])();
      // }
      // var objectForStory = selectObjectFlow(sel);
      // // The drink I chose was Coke
      // console.log("objectForStory: " + objectForStory);
      //=====================================================
      
      
      
      
      // Visibility of dropdown menu
      if (dropdownvis === true) {
        $mySelect.show();
        selectMenu(dropopt);
      }

      // Update for monitoring energy level
      updateEnergyLevel();

      
      //console.log("character.energy: " + character.energy);

      $goOnButton.show("slow").text(btn);
      $goOnButton.on("click", function(){
        dest();
        //selectSwitch;
      });
    } // End of function story
    
// ===================================== END OF FUNCTION "STORY" ========================
    

    var storyIntro = function () {
      //Reset Injections
      character.health = 4;
      character.strength = 0;
      character.stealth = 0;
      
      $contentDiv.slideDown('25000');
      story(
        storyTextIntro.hl, 
        storyTextIntro.copy, 
        storyTextIntro.button, 
        storyTextIntro.dropDownOptions, 
        storyTextIntro.dropvis,
        storyTextIntro.injection,
        storyTextIntro.thinkingTime,
        storyTextIntro.background,
        storyPart01
      );
    }
    var storyPart01 = function () {
      checkEnergyLevel();
      story(
        storyText01.hl, 
        storyText01.copy, 
        storyText01.button,
        storyText01.dropvis, 
        storyText01.dropDownOptions, 
        storyText01.injection,
        storyText01.thinkingTime,
        storyText01.background,
        storyPart02
      );
    }
    var storyPart02 = function () {
      checkEnergyLevel();
      story(
        storyText02.hl, 
        storyText02.copy, 
        storyText02.button, 
        storyText02.dropvis,
        storyText02.dropDownOptions, 
        storyText02.injection,
        storyText02.thinkingTime,
        storyText02.background,
        storyPart03
      );
    }
    var storyPart03 = function () {
      checkEnergyLevel();
      story(
        storyText03.hl, 
        storyText03.copy, 
        storyText03.button, 
        storyText03.dropvis,
        storyText03.dropDownOptions, 
        storyText03.injection,
        storyText03.thinkingTime,
        storyText03.background,
        storyPart04
      );
    }
    var storyPart04 = function () {
      checkEnergyLevel();
      story(
        storyText04.hl, 
        storyText04.copy, 
        storyText04.button, 
        storyText04.dropvis,
        storyText04.dropDownOptions, 
        storyText04.injection,
        storyText04.thinkingTime,
        storyText04.background,
        storyPart05
      );
    }
    var storyPart05 = function () {
      checkEnergyLevel();
      story(
        storyText05.hl, 
        storyText05.copy, 
        storyText05.button, 
        storyText05.dropvis,
        storyText05.dropDownOptions, 
        storyText05.injection,
        storyText05.thinkingTime,
        storyText05.background,
        storyPart06
      );
    }
    var storyPart06 = function () {
      checkEnergyLevel();
      story(
        storyText06.h1, 
        storyText06.copy, 
        storyText06.button, 
        storyText06.dropvis,
        storyText06.dropDownOptions, 
        storyText06.injection,
        storyText06.thinkingTime,
        storyText06.background,
        storyPart07
      );
    }
    var storyPart07 = function () {
      checkEnergyLevel();
      story(
        storyText07.hl, 
        storyText07.copy, 
        storyText07.button, 
        storyText07.dropvis,
        storyText07.dropDownOptions, 
        storyText07.injection,
        storyText07.thinkingTime,
        storyText07.background,
        //storyPart06
        storyEnd
      );
    }
    var storyEnd = function () {
      checkEnergyLevel();
      story(
        storyTextEnd.hl, 
        storyTextEnd.copy, 
        storyTextEnd.button, 
        storyTextEnd.dropvis,
        storyTextEnd.dropDownOptions, 
        storyTextEnd.injection,
        storyTextEnd.thinkingTime,
        storyTextEnd.background
        //storyPart06
      );
    }

    var goingToDie = function () {

      $('#messageDiv').remove();
      $goOnButton.remove();
      $mySelect.remove();
      $gaugetimer.remove();
      $gaugetoggle.remove();
      
      $headline.replaceWith("<h1>" + storyGoingToDie.hl + "</h1>");
      $textContent.text(storyGoingToDie.copy).show();
      $textContent.replaceWith("<p>" + storyGoingToDie.copy + "<p>");
      
      
      $reloadButton.show().text('Reload!');
      $reloadButton.click(function() {
                      location.reload(true/false);
                      storyIntro();
                    }
                  );
      console.log("Du bist leider gestorben, weil deine Energie zu niedrig geworden ist: " + character.energy);
    }
    
    storyIntro();
  
};