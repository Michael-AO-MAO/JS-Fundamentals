const arg = process.argv[2];
const number = Number(arg);

if (!isNaN(number) && arg !== undefined && arg.trim() !== "") {
  console.log(`My number: ${number}`);
} else {
  console.log("Not a number");
}