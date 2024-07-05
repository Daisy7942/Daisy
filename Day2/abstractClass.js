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
//추상클래스
var AbstractNamespace;
(function (AbstractNamespace) {
    var Vehicle = /** @class */ (function () {
        function Vehicle(wheelCount) {
            this.wheelCount = wheelCount;
        }
        Vehicle.prototype.showNumberOfWheels = function () {
            console.log("moved ".concat(this.wheelCount));
        };
        return Vehicle;
    }());
    var Motorcycle = /** @class */ (function (_super) {
        __extends(Motorcycle, _super);
        function Motorcycle() {
            return _super.call(this, 2) || this;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
        };
        return Motorcycle;
    }(Vehicle));
    var Autocycle = /** @class */ (function (_super) {
        __extends(Autocycle, _super);
        function Autocycle() {
            return _super.call(this, 4) || this;
        }
        Autocycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("Automobile has ".concat(this.wheelCount));
        };
        Autocycle.prototype.showNumberOfWheels = function () {
            console.log("moved Automobile ".concat(this.wheelCount));
        };
        return Autocycle;
    }(Vehicle));
    var motocycle = new Motorcycle();
    motocycle.showNumberOfWheels();
    motocycle.updateWheelCount(100);
    console.log("updated data", motocycle.showNumberOfWheels());
    var autocycle = new Autocycle();
    autocycle.showNumberOfWheels();
})(AbstractNamespace || (AbstractNamespace = {}));
