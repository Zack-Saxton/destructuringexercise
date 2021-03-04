const mcushows = [
  "the falcon and winter soldier", "wandavision"
];

const starwarshows = [
  "mandolorian", 
  "clone wars"
];

const disneyplus = [
  ...mcushows, 
  ...starwarshows, 
  "muppets now"
];

console.log(disneyplus);

const netflixmovies = {
  action: "extraction",
  drama: " the irishman",
};

const disneyplusmovies = {
  musical: "hamilton",
  drama: "togo",
};
const streamingmovies = {
  ...disneyplusmovies,
  ...netflixmovies,
  comedy: "shazam",
};

console.log(streamingmovies);

const disneyjunior = [
  "pj masks", 
  "jake and the never pirates"
];

const [pj, jake] = disneyjunior;
console.log(pj, jake);

const avengers = {
  captainAmerica: "Steve Rogers",
  theHulk: "Bruce Banner"
}
const{captainAmerica, theHulk} = avengers;

console.log(captainAmerica, theHulk);

const moreAvengers = {
  blackwidow: [`natasha`, `birdman`,],
  hawkeye: [`clint`, `arm guy`],
  ironman: `tony`,
};
// have to call the key item of blackwidow
const {blackwidow:nat, ...others} = moreAvengers;


console.log(nat, others);


const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };
  const all = [
    // calling spread bonus for key of first, second, third
...bonus.first,
...bonus.second,
...bonus.third,

  ];

console.log(all);

const [one, two, three] = bonus.first;
const [four, five, six] = bonus.second;
const [seven, eight, nine] = bonus.third;

console.log(one, two, three, four, five, six, seven, eight , nine);