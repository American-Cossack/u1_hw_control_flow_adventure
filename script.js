// let age = prompt(
//   `It is a dark day. You find yourself in the Mines of Moria. A dwarf jabs your shoulder, as you hear the wailing of orcs from afar. "Hey lad!" He asks you. "You don't look ready for this. How old are ya?"`
// );
// // ES6 String Interpolation
// alert(
//   `"${age} years old, eh? Well, you're a wizard aren't ya? Maybe you can help us get out of here."`
// );
// let freezingMagic = prompt(
//   `"Oh no, the orcs block our path! Quick lad! Do you have any freezing magic? Quick, recite it now!"`
// );
// let earthMagic = prompt(
//   `"That did it! Great work kid!" the Dwarf says as you rush across the bridge. More orcs follow along your path. "Quick kid, recite your magic, destroy the bridge behind us!"`
// );
let routeChange = confirm(
  `"All right, kid." The dwarf belts. "We're going down this path on the right. That good with you?" You stare down the path. It looks deep, ominorous, you swear you can hear the heavy breathing of some infernal thing. Yet the other way has a shining light to it. Perhaps it is the way to escape? Do you follow the Dwarf's advice?`
);

if (routeChange === true) {
  let trollFight = confirm(
    `As you stumble around, you find a giant, lumbering troll. The runes on its skin indicate that it is heavily magic resitant. You spy an axe stcking in to the wall. "Quick kid, do something now!!" The Dwarf bellows. Do you take the axe?`
  );
}
if (routeChange === false) {
  alert(
    `You insist to the dwarf, that the brighter lit way must be the path. Out. Yet you find at the end a horrifying abomination. A Balrog of Morgoth. Before you can even react, the Balrog incinerates you in its flames. Your end comes painfully, but at least it comes quick.`
  );
}

if (trollFight === "true") {
  alert(
    `You grab the axe. With a well aimed shot, and your own magic partially guiding it, the axe hits the troll straight in the forehead. The beast screams in pain, and flees out the way you came. As you look around the room, you find a crack in the wall, and tear it open. The way opens to daylight. "We're free!, thank Valaya we're free!" The Dwarf shouts for joy. "I won't forget this kindness, stranger. You ever visit the Blue Mountains, I'll make it worth your while." "The Blue Mountains..." you mumble to yourself. "I heard they're nice this time of year.`
  );
}

if (trollFight === "false") {
  alert(
    `You attempt to cast your spells, but your magic bounces off the troll instead. The troll grabs you and tosses you around, before flinging you across the room. You watch as the dwarf is clubbed to death, while you bleed out against the wall. Two more corpses to the innumerable, in the Mines of Moria.`
  );
}

// switch (confirm) {
//   case age < 30:
//     alert(
//       `"All right, we're going down this path on the right. That good with you kid?"`
//     );
//     break;
// }
// console.log(confirm);
// let shine = "";
// if (direction === true) {
//   confirm(
//     `You go down the right stairs. The way leads to a hulking troll. "Bah, we shouldn't have gone this way!" The dwarf comments. "Quick, use my axe, throw it in his head!"`
//   );
// } else
//   confirm(
//     `You go down the left stairs. A giant spider looks at you. "Quick lad, shine your light at it!"`
//   );

// if (shine === false) {
//   prompt(`You are eaten alive by the giant spider.`);
// }
// switch (empID) {
//     case 1:
//             System.out.println("RR")
//             break;
//     case 2:
//             System.out.println("JJ")
//             break;
// })

//if direction ==true
// 'You go down the right stairs.'
// prompts user and stores value in the variable
//let valueOfPrompt = prompt();
// logs value stored
//console.log(valueOfPrompt);
