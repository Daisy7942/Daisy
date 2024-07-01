function doSomething(a) {
    var others = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        others[_i - 1] = arguments[_i];
    }
    // ...others = [2,3,4,5,6,7];
    console.log(a, others, others[others.length - 1]);
}
doSomething(1, 2, 3, 4, 5, 6, 7);
