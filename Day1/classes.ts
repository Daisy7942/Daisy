// class Person {
//   constructor(private readonly msg: string) {
//     // 함수가 들어가는 자리, 객체가 생성될때 자동 실행
//     console.log("생성자 정말 되나?");
//   }
//   speak() {
//     this.msg = "test";
//     console.log(this.msg);
//   }
// }

// const tom = new Person("hello");
// tom.msg = "hello world";
// tom.speak();

// // private : 접근제한
// // readonly : 읽기만 가능

class Speaker {
  private message: string;

  constructor(private name: string) {}

  get Message() {
    if (!this.message.includes(this.name)) {
      throw Error("message is missing speaker's name");
    }
    return this.message;
  }

  set Message(val: string) {
    let tmpMessage = val;
    if (!val.includes(this.name)) {
      tmpMessage = this.name + " " + val;
    }
    this.Message = tmpMessage;
  }
}

const speaker = new Speaker("john");
speaker.Message = "hello";
console.log(speaker.Message);
