class Vehicle {
  constructor(protected wheelCount: number) {}
  showNumberOfWheels() {
    console.log(`moved ${this.wheelCount}`);
  }
}
//inheritance  상속
class Motocycle extends Vehicle {
  constructor() {
    super(2);
  }
  showNumberOfWheels(): void {
    console.log(`moved ${this.wheelCount}+4 wheels `);
  }

  updatedWheelCount(newWheelcount: number) {
    this.wheelCount = newWheelcount;
  }
}

class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motorCycle = new Motocycle();
// motorCycle.updatedWheelCount(6);
motorCycle.showNumberOfWheels();
const automobile = new Automobile();
automobile.showNumberOfWheels();

export {};
