// class ClassA {
//   static typeName: string;

//   constructor() {}

//   static getFullName() {
//     return "ClassA" + ClassA.typeName;
//   }
// }
// const a = new ClassA();
// // console.log(a.typeName); // error
// console.log(ClassA.typeName); // Output: undefined
// console.log(ClassA.getFullName()); // Output: ClassAundefined

class Runner {
  static lastRunTypeName: string;

  constructor(private typeName: string) {}

  run() {
    Runner.lastRunTypeName = this.typeName;
  }
}

const runner_a = new Runner("a");
const b = new Runner("b");

runner_a.run();
b.run();

console.log(Runner.lastRunTypeName);
