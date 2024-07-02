class Vehicle {
  constructor(protected wheelCount: number) {}
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
}

const motorCycle = new Motocycle();
motorCycle.updatedWheelCount(6);
motorCycle.showNumberOfWheels();
const automobile = new Automobile();
automobile.showNumberOfWheels();
