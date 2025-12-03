const fs = require("fs");
const { parse } = require("path");

const ranges = [];

let invalidCount = 0;

// read the file and parse the input

const input = fs.readFileSync("input.txt", "utf-8").split(",");
input.forEach(line => {
  const range = line.trim();
  if (range === "") {
    return;
  }

  ranges.push(range);
});

// process the ranges

// puzzle 1

ranges.forEach(range => {
  const [minStr, maxStr] = range.split("-");
  const min = parseInt(minStr, 10);
  const max = parseInt(maxStr, 10);

  for (let i = min; i <= max; i++) {
    // check if both parts of `i` split in half are equal
    // the numbers can be many digits long
    const numStr = i.toString();
    const len = numStr.length;

    if (len % 2 !== 0) {
      continue; // skip odd length numbers
    }

    const half = Math.floor(len / 2);
    const firstHalf = numStr.slice(0, half);
    const secondHalf = numStr.slice(len - half);

    if (firstHalf === secondHalf) {
      invalidCount += i;
    }
  }
});

// puzzle 2



// output the invalid count

console.log("Invalid Count:", invalidCount);
