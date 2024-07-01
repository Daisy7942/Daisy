var myFunc = function (message, title, age) {
    console.log(message);
    console.log(title);
    console.log(age);
    return true;
};
myFunc("hello", "myFirstArrowFunc", 30);
// (console.log('func'))
var func = function () { return console.log("func"); };
var func1 = function () { return ({ name: "dave" }); };
var func2 = function () {
    var val = 20;
    return val;
};
console.log(func());
console.log(func1());
console.log(func2());
