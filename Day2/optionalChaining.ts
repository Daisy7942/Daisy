namespace OptionalChainingNS {
  interface Wheels {
    count?: number;
  }
  // ?는 nullable-- null일수도 있다.
  interface Vehicle {
    wheels?: Wheels;
  }

  class Automobile implements Vehicle {
    constructor(public wheels?: Wheels) {}
  }

  const car: Automobile | undefined = new Automobile({
    count: undefined,
  });
  console.log("car ", car);
  console.log("wheels ", car?.wheels);
  console.log("count ", car?.wheels?.count);

  const val1 = undefined;
  const val2 = 10;
  const result = val1 ?? val2;
  // ??값이 널이 아니면 result null이면 val2 가 들어감?
  const result = val1 != null ? val1 : val2;

  // value = (조건) ? statment1 : statment2; // 참일경우?
  // value = 조건 ? statment1 : (조건2) ? statment2: statment3;

  // const count = !car ? 0
  // : !car.wheels ? 0
  // : !car.wheels.count ? 0
  // : car.wheels.count;
}
