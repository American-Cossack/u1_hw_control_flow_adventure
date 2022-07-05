let age = prompt(
  `It is a dark day. You find yourself in the Mines of Moria. A dwarf jabs your shoulder, as you hear the wailing of orcs from afar. "Hey lad!" He asks you. "You don't look ready for this. How old are ya?"`
);
// ES6 String Interpolation
alert(
  `"${age} years old, eh? Well, you're a wizard aren't ya? Maybe you can help us get out of here."`
);
let freezingMagic = prompt(
  `"Oh no, the orcs block our path! Quick lad! Do you have any freezing magic? Quick, recite it now!" (Create your own name for the magic spell)`
);
let earthMagic = prompt(
  `"That did it! Great work kid!" the Dwarf says as you rush across the bridge. More orcs follow along your path. "Quick kid, recite your magic, destroy the bridge behind us!"`
);
let routeChange = confirm(
  `"All right, kid." The dwarf belts. "We're going down this path on the right. That good with you?" You stare down the path. It looks deep, ominorous, you swear you can hear the heavy breathing of some infernal thing. Yet the other way has a shining light to it. Perhaps it is the way to escape? Do you follow the Dwarf's advice?`
);

if (routeChange == true) {
  let trollFight = confirm(
    `As you stumble around, you find a giant, lumbering troll. The runes on its skin indicate that it is heavily magic resitant. You spy an axe stcking in to the wall. "Quick kid, do something now!!" The Dwarf bellows. Do you take the axe?`
  );
  if (trollFight == true) {
    alert(
      `You grab the axe. With a well aimed shot, and your own magic partially guiding it, the axe hits the troll straight in the forehead. The beast screams in pain, and flees out the way you came. As you look around the room, you find a crack in the wall, and tear it open. The way opens to daylight. "We're free! Thank Valaya we're free!" The Dwarf shouts for joy. "I won't forget this kindness, stranger. You ever visit the Blue Mountains, I'll make it worth your while." "The Blue Mountains..." you mumble to yourself. "I heard they're nice this time of year.`
    );
  }
} else {
  let balrogFight = confirm(
    `You insist to the dwarf, that the brighter lit way must be the path. Out. Yet you find at the end a horrifying abomination. A Balrog of Morgoth. The great creature doesn't spot you, hidden in the shadows as you are. "Kid, use your magic to hide us!" the Dwarf says. But the way is dimly lit around the thing, perhaps you could sneak around it without magic. Do you follow the Dwarf's advice?`
  );
  if (balrogFight == true) {
    alert(
      `You recite your magic to darken yourselves and hide. Unfortunately, the Balrog is sensitive to such magical changes. With a hiss and a roar, daemonic fire incinerates you and the dwarf.`
    );
  } else {
    let orcFight = confirm(
      `You are able to barely make your way around the fearsome creature. A light beckons up ahead. Yet more orcs block your path. There is no way around them. Their number seems innumerable. "C'mon, we can take em!" The dwarf bellows. You think their number is too many. Better to frighten or deceive them. Do you follow the dwarf's advice?`
    );
    if (orcFight == true) {
      alert(
        `You and the dwarf charge the invading orcs. Row upon row of foul vermin die. Yet it is not enough. Where a dozen die, two dozen return to take their place. You and your companion are surrounded, and eventually, butchered for your arrogance.`
      );
    } else {
      let crowFly = confirm(
        `You recite a chant, and summon a visage of the Balrog into the chamber. The orcs flee and scatter in panic. The path is open to the sky. You see a dark visage of crows on the horizon. Something doesn't feel right about them. There is a nearby rock outcropping you can hide under. Do you hide?`
      );
      if (crowFly == true) {
        alert(
          `The crows pass over. Whatever dark wizard may have sent them, he knows not of your location. You and the dwarf congratulate yourself on having escaped the mines.`
        );
      } else {
        alert(
          `As the crows spot you, a horde of orcs comes out of the mines. They surround you and butcher you. To make it this far, and to die here, is simply heartbreaking.`
        );
      }
    }
  }
}

// if (trollFight == true) {
//   alert(
//     `You grab the axe. With a well aimed shot, and your own magic partially guiding it, the axe hits the troll straight in the forehead. The beast screams in pain, and flees out the way you came. As you look around the room, you find a crack in the wall, and tear it open. The way opens to daylight. "We're free!, thank Valaya we're free!" The Dwarf shouts for joy. "I won't forget this kindness, stranger. You ever visit the Blue Mountains, I'll make it worth your while." "The Blue Mountains..." you mumble to yourself. "I heard they're nice this time of year.`
//   );
// }

if (trollFight == false) {
  alert(
    `You attempt to cast your spells, but your magic bounces off the troll instead. The troll grabs you and tosses you around, before flinging you across the room. You watch as the dwarf is clubbed to death, while you bleed out against the wall. Two more corpses to the innumerable, in the Mines of Moria.`
  );
}
