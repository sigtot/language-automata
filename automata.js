var transitions = [
  [
      [1, ["the", "a", "some"]]
  ],
  [
      [2, ["prince", "boy", "princess", "girl", "woman", "blacksmith", "doctor", "king", "priest"]],
      [1, ["young", "pretty", "evil", "ugly", "tall", "handsome", "weird"], true]
  ],
  [
      [3, ["who"]],
      [7, ["went", "walked", "ran", "escaped", "traveled"]]
  ],
  [
      [4, ["lived", "worked", "grew up"]],
      [5, ["owned", "had", "wanted"]]
  ],
  [
      [5, ["in"]]
  ],
  [
      [6, ["the", "a"]]
  ],
  [
      [2, ["cottate", "house", "castle", "tavern", "barn"]],
      [6, ["big", "small"], true]
  ],
  [
      [8, ["to"]]
  ],
  [
      [9, ["the", "a"]]
  ],
  [
      [10, ["forest", "lake", "graveyard", "cave", "park", "mountain"]],
      [9, ["big", "dark", "scary", "small"], true]
  ],
  [
      [0, ["and", "but", "because", "and then", "since"]]
  ]
];

var state = 0;
var adjective = true;

function getRandomElement(array){
  return array[Math.floor(Math.random() * array.length)];
}

setInterval(function(){
  var transition;
  if(adjective) {
    transition = getRandomElement(transitions[state]);
    if(transition[2] !== undefined) adjective = false;
  } else {
    transition = transitions[state][0];
    adjective = true;
  }
  state = transition[0];
  $('#sentence').append(getRandomElement(transition[1]) + " ");
   }, 200);
