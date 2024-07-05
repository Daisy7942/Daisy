interface User {
  //interface는 객체의 타입을 정의
  name: string;
  age: number;
}

function canDrive(usr: User) {
  console.log("user is", usr.name);

  if (usr.age >= 16) {
    console.log("allow to drive");
  } else {
    console.log("do not allow to drive");
  }
}

const tom = {
  name: "tom",
  age: 20,
};

canDrive(tom);
