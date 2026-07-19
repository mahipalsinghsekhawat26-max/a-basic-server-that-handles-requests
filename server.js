const http = require('http');

// UPDATE: Cloud servers assign their own random ports. 
// This line says "Use the cloud's port IF it exists, otherwise use 3000 for local testing."
const PORT = process.env.PORT || 3000;

// SERVER STATE: This lives in the computer's memory as long as the server runs!
let monster = {
  name: "Node-Saurus",
  hunger: 50,    
  boredom: 50,   
  status: "Chilling"
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  monster.hunger += 2;
  monster.boredom += 3;

  if (monster.hunger > 100) monster.hunger = 100;
  if (monster.boredom > 100) monster.boredom = 100;

  if (req.url === '/') {
    let expression = "🤖";
    if (monster.hunger > 70) expression = "🦁 (RAWR! FEED ME!)";
    else if (monster.boredom > 70) expression = "😴 (Yawn... so bored)";
    else if (monster.hunger < 20 && monster.boredom < 20) expression = "✨🥰 (Perfectly Happy!)";

    let output = `
    === Welcome to ${monster.name}'s Cage ===
    Current Mood: ${expression}
    
    Stats:
    - Hunger: [${'█'.repeat(monster.hunger / 10)}${'-'.repeat(10 - monster.hunger / 10)}] ${monster.hunger}%
    - Boredom: [${'█'.repeat(monster.boredom / 10)}${'-'.repeat(10 - monster.boredom / 10)}] ${monster.boredom}%
    
    Interact:
    - Go to /feed to give food
    - Go to /play to entertain
    `;
    res.end(output);

  } else if (req.url === '/feed') {
    monster.hunger -= 30;
    if (monster.hunger < 0) monster.hunger = 0;
    res.end(`Crunch crunch! You fed ${monster.name}. Hunger dropped! Go back to / to check stats.`);

  } else if (req.url === '/play') {
    monster.boredom -= 40;
    if (monster.boredom < 0) monster.boredom = 0;
    res.end(`Yay! You threw a digital ball. ${monster.name} is happy! Go back to / to check stats.`);

  } else if (req.url === '/poke') {
    res.end(`OUCH! You poked ${monster.name}! It growled at you.`);
    
  } else {
    res.writeHead(404);
    res.end("404: The monster doesn't know that command.");
  }
});

server.listen(PORT, () => {
  console.log(`Monster server awakened on port ${PORT}!`);
});
