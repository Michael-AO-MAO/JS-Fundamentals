const x = Number(process.argv[2]);

if (process.argv[2] === undefined || isNaN(x) || !Number.isInteger(x)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}