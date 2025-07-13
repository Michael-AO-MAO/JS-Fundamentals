const size = Number(process.argv[2]);

if (process.argv[2] === undefined || isNaN(size) || !Number.isInteger(size)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}