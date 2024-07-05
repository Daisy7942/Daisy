// class Person {
//   constructor(private readonly msg: string) {} // constructor는 객체가 생성될 때 자동실행 new키워드와 함께 사용됨 // private로 클래스의 멤버 변수나 메서드를 외부에서 접근할 수 없도록 제한하는 역할
// private : 접근제한
// readonly : 읽기만 가능

//   speak() {
//     // this.msg = "speak " + this.msg;
//     console.log(this.msg);
//     // console.log("생성자 정말 되나?");
//   }
// }

// const tom = new Person("hello");
// tom.msg = "hello world";
// tom.speak();
///////////////////////////////////////
interface Speaker {
  message: string;
}
class Speaker {
  private _message: string;
  constructor(private name: string) {}

  get Message() {
    if (!this._message.includes(this.name)) {
      throw Error("message is missing speaker's name");
    }
    return this._message;
  }

  set Message(val: string) {
    let tmpMessage = val;
    if (!val.includes(this.name)) {
      tmpMessage = this.name + " " + val;
    }
    this.Message = tmpMessage;
  }
}

const speaker = new Speaker("john"); // console.log(speaker);
speaker.Message = "hello"; // set
console.log(speaker.Message); // get
console.log(speaker.Message); // get
console.log(); // get
