import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

let namen = [];

async function vraagNaam() {
  while (true) {
    const input = await rl.question("Voer een naam in: ");
    if (input.toUpperCase() === 'S') {
      if (namen.length === 0) {
        console.log("Je hebt geen namen ingevoerd. Probeer het opnieuw.");
      } else {
        console.log("\nLijst van namen:");
        console.log(namen);
        break;
      }
    } else {
      namen.push(input);
    }
  }
  rl.close();
}

vraagNaam();
