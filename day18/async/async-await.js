async function myName() {
  return "Andy";
}

async function showName() {
  const name = await myName(); //await붙혀주므로서 비동기를 기다려주니까 동기식으로 바꿔줌
  console.log(name);
}

console.log(showName());

function waitOneSecond(msg) {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(`${msg}`), 1000);
  });
}

async function countOneToTen() {
  for (let x of [...Array(10).keys()]) {
    let result = await waitOneSecond(`${x + 1}초 대기중...`);
    console.log(result);
  }
  console.log("완료");
}

countOneToTen();
