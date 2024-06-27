// class Person{
//   name: string;
// }
// 일때
// const jill: { name: string} = {     과
// const jill:Person = {     는 같다.
class Person {
  name: string;
}

const jill: { name: string } = {
  name: "jill",
};

const person: Person = jill;
console.log(person);
