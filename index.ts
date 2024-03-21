function decorate() {
  return function (target, context) {}
}

@decorate() // this does not have to be the same decorator as on the method
export class Test {
  static something = 42;
  @decorate() // this does not have to be the same decorator as on the class
  method() {}
}
