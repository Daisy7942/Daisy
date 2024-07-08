function eat(calories: number) {
  console.log("i ate " + calories + " calories");
}
// void는 함수가 반환할 값이 없음 을 의미
function sleepIn(hours: number): void {
  console.log("i slept " + hours + " hours");
}

let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);
