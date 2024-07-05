var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GenericNamespace;
(function (GenericNamespace) {
    var Automobile = /** @class */ (function () {
        function Automobile(name, wheels) {
            this.name = name;
            this.wheels = wheels;
        }
        Automobile.prototype.getName = function () {
            return this.name;
        };
        Automobile.prototype.getWheelCount = function () {
            return this.wheels;
        };
        return Automobile;
    }());
    var Chevy = /** @class */ (function (_super) {
        __extends(Chevy, _super);
        function Chevy() {
            return _super.call(this, "Chevy", { count: 4, diameter: 18 }) || this;
        }
        return Chevy;
    }(Automobile));
    var chevy = new Chevy();
    console.log("car name ", chevy.getName());
    console.log("wheels ", chevy.getWheelCount());
    console.log(chevy);
})(GenericNamespace || (GenericNamespace = {}));
var Animal = /** @class */ (function () {
    function Animal(name, color) {
        this.name = name;
        this.color = color;
    }
    Animal.prototype.bark = function () {
        console.log("walwal");
    };
    return Animal;
}());
var animal = new Animal("animal", "red");
console.log(animal.name);
console.log(animal.color);
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this, "dog", "yellow") || this;
    }
    return Dog;
}(Animal));
var doggy = new Dog();
doggy.bark();
console.log(doggy.name);
console.log(doggy.color);
var cats = /** @class */ (function (_super) {
    __extends(cats, _super);
    function cats(name, color) {
        return _super.call(this, name, color) || this;
    }
    cats.prototype.bark = function () {
        console.log("woof");
    };
    cats.prototype.jump = function () {
        console.log("jump");
    };
    return cats;
}(Animal));
// const Doggy = new Dog("Doggy", "red");
var Cat = new cats("hey", "red");
console.log(Cat.name);
console.log(Cat.color);
Cat.bark();
Cat.jump();
// Doggy.bark();
