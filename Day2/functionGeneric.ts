interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(arg: T): number {
  // if ((arg as any).hasOwnProperty("length")) {
  //   return arg["length"];
  // }

  // return 0;
  return arg.length;
}
console.log(getLength<number>(22));
console.log(getLength("Hello world."));
