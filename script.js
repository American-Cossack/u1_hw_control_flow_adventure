let age = prompt(
  `It is a dark day. You find yourself in the Mines of Moria. A dwarf jabs your shoulder, as you hear the wailing of orcs from afar. "Hey lad!" He asks you. "You don't look ready for this. How old are ya?"`
);
// ES6 String Interpolation
alert(
  `"${age} years old, eh? Well, you're a wizard aren't ya? Maybe you can help us get out of here."`
);
let freezingMagic = prompt(
  `"Oh no, the orcs block our path! Quick lad! Do you have any freezing magic? Quick, recite it now!"`
);
let earthMagic = prompt(
  `"That did it! Great work kid!" the Dwarf says as you rush across the bridge. More orcs follow along your path. "Quick kid, recite your magic, destroy the bridge behind us!"`
);
switch (confirm) {
  case age < 30:
    console.log(
      `"All right, we're going down this path on the right. That good with you kid?"`
    );
    break;
}
console.log(confirm);
let shine = "";
if (direction === true) {
  confirm(
    `You go down the right stairs. The way leads to a hulking troll. "Bah, we shouldn't have gone this way!" The dwarf comments. "Quick, use my axe, throw it in his head!"`
  );
} else
  confirm(
    `You go down the left stairs. A giant spider looks at you. "Quick lad, shine your light at it!"`
  );

if (shine === false) {
  prompt(`You are eaten alive by the giant spider.`);
}
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
