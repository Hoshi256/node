const { readFileSync, writeFileSync } = require("fs");

console.log('start');
const first = readFileSync("./content/first.txt", "utf8");
const seccond = readFileSync("./content/seccond.txt", "utf8");

// console.log(first, seccond);

writeFileSync(
  "./content/result-sync.txt",
  `coucou : ${first}, ${seccond}`,
  { flag: "a" }
);
console.log('done with this task')
console.log("starting the next one");

