function oldEnoough(age: number): never | boolean {
  if (age > 59) {
    throw Error("Too old!");
  } else if (age <= 18) {
    return false;
  }
  // else {
  //   return true;
  // }

  //위에꺼 또는  밑에꺼가 같은 결과나옴//
  return true;
}
