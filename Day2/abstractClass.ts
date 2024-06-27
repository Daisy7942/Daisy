//추상클래스
namespace AbstractNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}
    abstract updatedWheelCount(newWheelcount: number): void;
    showNumberOfWheels() {
      console.log(`moved ${this.wheelCount}`);
    }
  }

  class Motocycle extends Vehicle {
    constructor() {
      super(2);
    }

    updatedWheelCount(newWheelcount: number) {
      this.wheelCount = newWheelcount;
    }
  }

  class Automobile extends Vehicle {
    constructor() {
      super(4);
    }
    updatedWheelCount(newWheelcount: number): void {}
  }

  const motorCycle = new Motocycle();
  motorCycle.updatedWheelCount(1);
  motorCycle.showNumberOfWheels();
  const automobile = new Automobile();
  automobile.updatedWheelCount(5);
  automobile.showNumberOfWheels();
}
