function eat(calories: number) {
  console.log("i ate " + calories + " calories");
}

function sleepIn(hours: number): void {
  console.log("i slept " + hours + " hours");
}

let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);
