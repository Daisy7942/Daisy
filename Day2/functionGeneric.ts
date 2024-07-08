interface HasLength {
  length: number;
  bark: () => void;
}

interface HasWidth {
  width: number;
}

// function getLength<T extends HasLength, HasWidth>(arg: T): number {
//   // if ((arg as any).hasOwnProperty("length")) {
//   //   return arg["length"];
//   // }

//   // return 0;
//   return arg.length;
// }
// console.log(getLength<number>(22));
// console.log(getLength("Hello world."));

interface Person {
  name: string;
  gender: string;
  age: number;
  run: () => void;
}

class Person1 {
  name: string;
  gender: string;
  age: number;
  constructor(name: string, gender: string, age: number) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  run() {
    console.log(`${this.name} is running`);
  }
}

class American implements Person {
  name: string;
  gender: string;
  age: number;

  constructor(name: string, gender: string, age: number) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  run() {
    console.log(`${this.name} is running`);
  }
}

class Korean extends Person1 {
  constructor(name: string, gender: string, age: number) {
    super(name, gender, age);
  }
}
