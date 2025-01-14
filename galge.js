const woordenlijst = [
  "vis",
  "beer",
  "vogelspin",
  "ooievaar",
  "dwergkonijn",
  "roodborstje",
  "dolfijn",
  "eekhoorn",
  "konijn",
  "zalm",
  "baardagaam",
];

function kiesWillekeurigWoord(woordenlijst) {
  const willekeurigeIndex = Math.floor(Math.random() * woordenlijst.length);
  return woordenlijst[willekeurigeIndex];
}

const willekeurigWoord = kiesWillekeurigWoord(woordenlijst);
let geradenLetters = [];
let fouteGokken = 0;
const maxFouteGokken = 6;

// Functie om het woord met geraden letters te tonen
function toonWoord(willekeurigWoord, geradenLetters) {
  let resultaat = "";
  for (const letter of willekeurigWoord) {
    if (geradenLetters.includes(letter)) {
      resultaat += letter;
    } else {
      resultaat += "_";
    }
  }
  return resultaat;
}

// Spel starten
console.log("Welkom bij Galgje!");
console.log(`Het woord heeft ${willekeurigWoord.length} letters.`);
console.log(toonWoord(willekeurigWoord, geradenLetters));

while (fouteGokken < maxFouteGokken) {
  const input = prompt("Raad een letter: ").toLowerCase();

  // Controleer of het invoer geldig is
  if (!input || input.length !== 1 || !/[a-z]/.test(input)) {
    console.log("Voer een geldige letter in.");
    continue;
  }

  if (geradenLetters.includes(input)) {
    console.log(`Je hebt de letter "${input}" al geraden.`);
    continue;
  }

  geradenLetters.push(input);

  if (willekeurigWoord.includes(input)) {
    console.log(`Goed geraden! De letter "${input}" zit in het woord.`);
  } else {
    console.log(`Fout! De letter "${input}" zit niet in het woord.`);
    fouteGokken++;
  }

  console.log(toonWoord(willekeurigWoord, geradenLetters));
  console.log(`Foute gokken: ${fouteGokken}/${maxFouteGokken}`);

  if (!toonWoord(willekeurigWoord, geradenLetters).includes("_")) {
    console.log("Gefeliciteerd! Je hebt het woord geraden!");
    break;
  }
}

if (fouteGokken === maxFouteGokken) {
  console.log("Helaas, je hebt verloren.");
  console.log(`Het woord was: ${willekeurigWoord}`);
}
