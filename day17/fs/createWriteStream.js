const fs = require("fs");

// const writeStream = fs.createWriteStream("./writeme2.txt");

// writeStream.on("finish", () => {
//   console.log("파일 쓰기 완료");
// });

// writeStream.write("이 글을 씁니다.\n");
// writeStream.write("한 번 더 씁니다.");
// writeStream.end();

//문제 : 아래와 같은 모양을 writeme2-1.txt 에 저장하십시오

// 00001
// 00011
// 00111
// 01111
// 11111

const writeStream = fs.createWriteStream("./writeme2-1.txt");

writeStream.on("finish", () => {
  console.log("파일 쓰기 완료");
});
// data = ["00001\n", "00011\n", "00111\n", "01111\n", "11111\n"];
data = [0, 0, 0, 0, 0];
for (let i = 4; i >= 0; i--) {
  data[i] = 1;
  writeStream.write(`${data}\n`);
}
writeStream.end();
// writeStream.write("이 글을 씁니다.\n");
// writeStream.write("한 번 더 씁니다.");
// writeStream.end();
