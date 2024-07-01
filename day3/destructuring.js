// function getEmplooyee(id) {
//   return {
//     name: "John",
//     age: 35,
//     address: "123 st",
//     count: "United States",
//   };
// }

// const { name: fullName, age } = getEmplooyee(22);
// console.log("employee", fullName, age);

function getEmplooyeeWorkInfo(id) {
  return [id, "Office St", "France"];
}

const [id, officeAddress] = getEmplooyeeWorkInfo(33);
console.log("employee", id, officeAddress);
