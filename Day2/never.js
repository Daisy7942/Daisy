function oldEnoough(age) {
    if (age > 59) {
        throw Error("Too old!");
    }
    else if (age <= 18) {
        return false;
    }
    // else {
    //   return true;
    // }
    return true;
}
