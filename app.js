const mcushows = ["the falcon and winter soldier", "wandavision"];

const starwarshows = ["mandolorian", "clone wars"];

const disneyplus = [...mcushows, ...starwarshows, "muppets now"];

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

const disneyjunior = ["pj masks", "jake and the never pirates"];

const [pj, jake] = disneyjunior;
console.log(pj, jake);

const moreAvengers = {
  blackwidow: `natasha`,
  hawkeye: `clint`,
  ironman: `tony`,
};
const {nat, ...others} = moreAvengers;
console.log(nat, others);

const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };

  const all = bonus{[
...first, ...second, ...third]
  };
  

console.log(all);