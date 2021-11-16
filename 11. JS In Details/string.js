const firstName = "Riam";
const job = "Develper";
const birthYear = 1997;
const year = 2050;

//Traditional
const riam =
  "I'm " + firstName + ",  a " + (year - birthYear) + " Years old " + job + ".";
console.log(riam);

//Template Literals
const riamNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(riamNew);

console.log(`Any regular string is supported here`);
