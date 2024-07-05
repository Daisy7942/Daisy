namespace GenericNamespace {
  interface Wheels {
    count: number;
    diameter: number;
  }

  interface Vehicle<T> {
    getName(): string;
    getWheelCount: () => T;
  }

  class Automobile implements Vehicle<Wheels> {
    constructor(private name: string, private wheels: Wheels) {}

    getName(): string {
      return this.name;
    }

    getWheelCount(): Wheels {
      return this.wheels;
    }
  }

  class Chevy extends Automobile {
    constructor() {
      super("Chevy", { count: 4, diameter: 18 });
    }
  }

  const chevy = new Chevy();
  console.log("car name ", chevy.getName());
  console.log("wheels ", chevy.getWheelCount());

  console.log(chevy);
}

class Animal {
  name: string;
  color: string;
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  bark() {
    console.log("walwal");
  }
}

const animal = new Animal("animal", "red");
console.log(animal.name);
console.log(animal.color);

class Dog extends Animal {
  constructor() {
    super("dog", "yellow");
  }
}

const doggy = new Dog();
doggy.bark();
console.log(doggy.name);
console.log(doggy.color);

class cats extends Animal {
  constructor(name: string, color: string) {
    super(name, color);
  }
  bark() {
    console.log("woof");
  }
  jump() {
    console.log("jump");
  }
}
// const Doggy = new Dog("Doggy", "red");
const Cat = new cats("hey", "red");
console.log(Cat.name);
console.log(Cat.color);
Cat.bark();
Cat.jump();
// Doggy.bark();
