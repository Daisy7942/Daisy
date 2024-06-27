function oldEnoough(age: number): never | boolean {
  if(age > 59) {
    throw Error("Tood old!");    
  }
  if (age <= 18) {
    return false;
  }

  if(age > 59) {
  return true;
} else if (age <= 18) {
  return false;
}