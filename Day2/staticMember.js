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
var Runner = /** @class */ (function () {
    function Runner(typeName) {
        this.typeName = typeName;
    }
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.typeName;
    };
    return Runner;
}());
var runner_a = new Runner("a");
var b = new Runner("b");
runner_a.run();
b.run();
console.log(Runner.lastRunTypeName);
