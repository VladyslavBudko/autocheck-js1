// Change code below this line
const firstElement = [];
const args = [];

function findMatches(firstElement, ...args) {
  const matches = []; // Don't change this line

  console.log("first: ", firstElement);
  console.log("args: ", args);

  for (const arg of args) {
    if (firstElement.includes(arg)) {
      matches.push(arg);
      console.log(`${arg} include`);
    }
  }

  // Change code above this line
  console.log(matches);
  return matches;
}

findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
