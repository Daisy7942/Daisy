// class Person{
//   name: string;
// }
// 일때
// const jill: { name: string} = {     과
// const jill:Person = {     는 같다.
var Person = /** @class */ (function () {
  function Person() {}
  return Person;
})();
var jill = {
  name: "jill",
};
var person = jill;
console.log(person);
