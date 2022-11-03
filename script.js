"use strict";
/*
let somenum;
let deletCount = 0;
let numCount = 0;
somenum = [1, 2, 3, 4, 5, 105, 7, 8, 9];

//if (somenum.includes(5)) {
// consol.log("delete 5");
//}
console.log(somenum);
if (console.log(somenum.includes(5))) {
  console.log("need delete 5");
}
//const five = somenum.indexOf(5);
//const deleteItems = somenum.splice(five);
//console.log(somenum);
for (let i = 0; somenum.length >= i; i++) {
  if (
    somenum[i] % 10 == 5 ||
    somenum[i] % 100 == 50 ||
    somenum[i] % 1000 == 500 ||
    somenum[i] / 10 == 5
  ) {
    console.log("have a 5");
    deletCount++;
  } else {
    numCount++;
  }
}
console.log(numCount + 1 - deletCount);
10-6=4
*/
//const randNum = Math.trunc(Math.random() * 6 + 1);
//console.log(randNum);
/*
const flowerDEL = function (some) {
  let num=some;
  let newNum = 0;
  if (num > 5) {
    for (let a = 1; num <= 5; a++) {
      num -= 6;
      newNum++;
    }
  }
};
*/
/*
function howMuchILoveYou(num) {
  const somefeeling = [
    "not at all",
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
  ];
  //console.log(somefeeling[1]);

  return somefeeling[num % 6];
}
howMuchILoveYou(1);
howMuchILoveYou(2);
howMuchILoveYou(3);
howMuchILoveYou(4);
howMuchILoveYou(5);
howMuchILoveYou(6);
howMuchILoveYou(7);
*/
/*
function calcsomeage(birthYear) {
  const age = 2077 - birthYear;
  function printage() {
    const output = `${fname} is a ${age} year old`;
    console.log(output);
    if (birthYear <= 2022 && birthYear > 2004) {
      const pizduk = `you are pizduk ${fname}`;
      console.log(pizduk);
    }
  }

  printage();
  return age;
}

const fname = "Adilbek";
calcsomeage(2005);
*/

//console.log(abplus);// THAT CODE DON'T WORK, because CONST VALUE
//console.log(abPlas); // THAT CODE WORK
//console.log(abArrow); // THAT CODE DON't WORK, because const VALUE

const abplus = function (a, b) {
  return a + b;
};
function abPlas(a, b) {
  return a + b;
}
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};
const resturan = {
  nAme: "Classic Italion",
  location: "Somewere Tavanti 22, Prizzeria, Italy",
  categories: ["Italian", "Pizzaria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "bruschetta", "Garlic bred", "caprese salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, addres }) {
    console.log(
      `Order recived!${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} wiil be delivered to ${addres} at the ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(` for the pasta need ${ing1}, ${ing2} & ${ing3}`);
  },

  orderPizza: function (mainIgr, ...otherIgr) {
    console.log(mainIgr);
    console.log(otherIgr);
  },
};
const airline = `TAP Air Portugal`;
const plane = `A320`;
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.length);
console.log(`B737`.length);

console.log(airline.indexOf(`r`));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf(`Portugal`));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(` `) + 1));

/* console.log(question.get(question.get(`correct`) === Answer));

/*
const question = new Map([
  [`question`, `what is the best programming language in the world`],
  [1, `C`],
  [2, `Java`],
  [3, `javascript`],
  ["correct", 3],
  [true, `correct`],
  [false, `try again!`],
]);
console.log(question);

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get(`question`));
for (const [key, value] of question) {
  if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
}

const Answer = 3; //Number(prompt(`Your answer`));
console.log(Answer);
console.log(...question.keys());
console.log(...question.values());
/*
Answer === 3
  ? console.log(question.get(true))
  : console.log(question.get(false));
*/
/*
for (const [team, odds] of Object.entries(game.odds)) {
  const winasshole = team === "x" ? "draw" : `${team} win with ${odds}`;
  console.log(winasshole);
}
const rest = new Map();
rest.set(`name`, `Classico Itali`);
rest.set(1, `Firenze`, `Italy`);
console.log(rest.set(2, `Lisbon, Portugal`));
rest
  .set(`categories`, [`Italian`, `Pizzeria`, `Vegetarian`, `Organic`])
  .set(`open`, 11)
  .set(`close`, 23)
  .set(true, "we are open ;3")
  .set(false, `we are close :c`);

console.log(rest.get(`name`));
console.log(rest.get(true));
console.log(rest.get(1));
console.log(`--------------`);
const time = 1;
console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));

console.log(rest.has(`categories`));
rest.delete(2);

const arr = [1, 2];
rest.set(arr, `Test`);
rest.set(document.querySelector(`h1`), `heading`);
console.log(rest);
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

/*
const orderSet = new Set([
  `Pasta`,
  `Pizza`,
  `Pizza`,
  "someshit",
  "Pasta",
  "Pizza",




]);/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



console.log(orderSet);
console.log(new Set(`adilbekimanaly`));
console.log(orderSet.size);
console.log(orderSet.has(`Bread`));
orderSet.add(`Garlic Bread`);
orderSet.add("Garlic Bread");
orderSet.delete("someshit");
console.log(orderSet);
for (const order of orderSet) console.log(order);
//Set
const staff = [
  `waiter`,
  `asshole`,
  `fucker`,
  `manager`,
  `waiter`,
  `asshole`,
  `fucker`,
];
const staffUN = [...new Set(staff)];
console.log(staffUN);

console.log(
  new Set([
    `waiter`,
    `asshole`,
    `fucker`,
    `manager`,
    `waiter`,
    `asshole`,
    `fucker`,
  ]).size
);
console.log(new Set(`adilbekimanaly`).size);
/*
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}





/*
if (resturan.openingHours && resturan.openingHours.mon) console.log;
//console.log(resturan.openingHours.mon.open);

console.log(resturan.openingHours.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = resturan.openingHours[day]?.open ?? `closed`;
  console.log(`${day} we suck some dicks ${open}`);
}
console.log(resturan.order?.(0, 1) ?? "that metod shit");
console.log(resturan.orderSomeshit?.(0.1) ?? "that metod shit");
/*
const menu = [...resturan.starterMenu, ...resturan.mainMenu];
for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
console.log(resturan);
/*
const rest1 = {
  name: "Adilbek",
  numGuests: 0,
};
const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests ??= 10;
//rest2.numGuests ??= 10;
//console.log(rest1);
//console.log(rest2);

/*
console.log(3 || "Adilbek"); //3
console.log("" || "Adil"); //'adilbek
console.log(true || 0); //true
console.log(undefined || null); //null

console.log(undefined || 0 || "" || "heLl" || 23 || null); //'heLl

console.log("helo" && 23 && null && "adilbek"); //null

if (resturan.orderPizza) {
  resturan.orderPizza("mushroom", "kolbosa");
}
resturan.orderPizza && resturan.orderPizza("mushroom", "kolbosa");
*/

/*
//coding chaleng
const arr = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, risotto, ...otherfood] = [
  ...resturan.mainMenu,
  ...resturan.starterMenu,
];
console.log(pizza, risotto, otherfood);

const { sat, ...weekdays } = resturan.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(1, 2, 3, 5, 9);
add(8, 7, 1, 4, 6, 7, 5);

const x = [12, 32, 56];
add(...x);
*/

/*
const arr = [7, 8, 9];
const badNewArrays = [1, 2, arr[0], arr[1], arr[2]];

console.log(badNewArrays);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const NewMenu = [...resturan.mainMenu, "SomeShit"];
console.log(NewMenu);

//copy array
const mainMenuCopy = [...resturan.mainMenu];

const allMenuCopy = [...resturan.mainMenu, ...resturan.starterMenu];
console.log(allMenuCopy);
const ad = "ADILBEK";
const da = [...ad, ""];

console.log(da);
console.log(...ad);

const ingr = [
  prompt(`let's male pasta! ingr 1?`),
  prompt(`ingr 2?`),
  prompt(`ingr 3?`),
];

console.log(ingr);
resturan.orderPasta(ingr[0], ingr[1], ingr[2]);
resturan.orderPasta(...ingr);
*/
/*
resturan.orderDelivery({
  time: "22;30",
  addres: "Somewere Tavanti 22",
  mainIndex: 2,
  starterIndex: 2,
});

const { nAme, openingHours, categories } = resturan;
console.log(nAme, openingHours, categories);

const { nAme: restauranName, openingHours: hours, categories: tags } = resturan;
console.log(restauranName, hours, tags);

const { menu = [], starterMenu: starters = [] } = resturan;

console.log(menu, starters);

let a = 111;
let b = 999;
const obg = { a: 23, b: 7, c: 14 };
({ a, b } = obg);
console.log(a, b);

const {
  frid: { open: o, close: c },
} = openingHours;
console.log(o, c);
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[0];
const c = arr[0];

const [x, y, z] = arr;
console.log(arr);
console.log(x, y, z);

let [main, , secondary] = resturan.categories;
//console.log(main, secondary);
/*
const temp = main;
main = secondary;
secondary = temp;
*/
/*
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [one, two] = resturan.order(2, 2);
console.log(one, two);

const nested = [2, 4, [5, 6]];
const [m, , [n, k]] = nested;
console.log(m, n, k);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

//coding chaleng #2
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels", "Adilbek"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const SCOred = Object.values(game.scored);
console.log(...SCOred[4]);
let i = 1;
let o = 0;
for (const playe of SCOred) {
  // console.log(...SCOred[i]);

  console.log(`Goal ${i}:${SCOred[o]}`);
  i++;
  o++;
}

console.log(`--------------`);

for (const [huy, gamer] of game.scored.entries()) {
  console.log(`Goal ${huy + 1}:${gamer}`);
}

let sum = 0;
const averageShit = Object.values(game.odds);
for (const calcSomeShit of averageShit) sum += calcSomeShit;
sum /= averageShit.length;
console.log(sum);
console.log(`-----------`);

for (const [team, odds] of Object.entries(game.odds)) {
  const winasshole = team === "x" ? "draw" : `${team} win with ${odds}`;
  console.log(winasshole);
}

/*
game.odds =
  (game.odds.team1 < game.odds.team2 && `team 1 winner`) || "team 2 winner";
console.log(game.odds);
*/

/*
console.log(`Odd of victory ${teamname[0]}:${averageShit[0]}`);
console.log(`Odd of victory ${teamname[1]}:${averageShit[2]}`);
console.log(`Odd of victory draw:${averageShit[1]}`);
//Goal 1:

//for (const [key, { scored }] of SCOred) {
// console.log(`It's ${scored}`);
//}

/*
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
*/

//console.log(game.scored?.(0));

/*
const players1 = [...game.players[0]];
console.log(players1);
const players2 = [...game.players[1]];
console.log(players2);

const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
console.log(gk1, gk2);
console.log(fieldPlayers1, fieldPlayers2);
/*
const fieldPlayers1 = [...players1];
const fieldPlayers2 = [];
*/
/*
console.log(fieldPlayers1);
const arr = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
*/
/*
const [...allPlayers] = [...players1, ...players2];
console.log(allPlayers);

const add = ["Thiago", "Coutinho", "Perisic"];
const [...playersFinal] = [...players1, ...add];
console.log(playersFinal);

const team1 = game.odds.team1;
const team2 = game.odds.team2;
const draw = game.odds.x;

function printGoals(score) {
  let sum = 0;
  for (let i = 0; i < score.length; i++) {
    sum += 1;
  }
  console.log(`${score}`);
  console.log(`${sum}:0`);
}
printGoals(game.scored);
game.odds =
  (game.odds.team1 < game.odds.team2 && `team 1 winner`) || "team 2 winner";
console.log(game.odds);
/*
function printGoals(...score) {
  let sum = 0;
  for (let i = 0; i < score.length; i++) {
    console.log("1");
    sum += 1;
  }
  console.log(...score);
  console.log(`${sum}:0`);
}
*/
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀


for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

for (const [team, odds] of Object.entries(game.odds)) {
  const winasshole = team === "x" ? "draw" : `${team} win with ${odds}`;
  console.log(winasshole);
*/
//size
/*
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
gameEvents.delete(64);
console.log(gameEvents);
//const staffUN = [...new Set(staff)];
//const eveeents = new Set()
const eveeents = [new Set(gameEvents.values())];
console.log();
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const [key, value] of gameEvents) {
  if (key < 45) console.log(`First half ${key}:${value}`);
  else console.log(`Second half ${key}:${value}`);
}
console.log(`----------------------------------`);
for (const [min, eve] of gameEvents) {
  const fHalf =
    min < 45
      ? `[first half]: ${min}:${eve} minutes`
      : `[second half]: ${min}:${eve} minutes`;
  console.log(fHalf);
}
*/
