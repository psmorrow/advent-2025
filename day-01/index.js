const fs = require("fs");

const STARTING_POSITION = 50;

const rotations = [];

let password = 0; // number of zeros
let position = STARTING_POSITION;

// read the file and parse the input

const input = fs.readFileSync("input.txt", "utf-8").split("\n");
input.forEach(line => {
  const rotation = line.trim();
  if (rotation === "") {
    return;
  }

  rotations.push(rotation);
});

// process the reports

rotations.forEach(rotation => {
  const direction = rotation.charAt(0);
  const steps = parseInt(rotation.slice(1), 10);

  // update the current position based on the rotation
  if (direction === "L") {
    position -= steps;
  } else if (direction === "R") {
    position += steps;
  }

  // wrap around the circular dial
  position = ((position % 100) + 100) % 100;

  // check if the current position is a zero
  if (position === 0) {
    password += 1;
  }
});

// output the result

console.log("Password:", password);
