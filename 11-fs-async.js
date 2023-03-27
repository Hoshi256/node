const { readFile, writeFile } = require("fs");
console.log('start');
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/seccond.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const seccond = result;
    writeFile(
      "./content/result-sync.txt",
      `Here is the result : ${first}, ${seccond}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});

console.log('starting new task');
