function _identity(x) {
  return x;
}

let _initClass;
let _Test;
new class extends _identity {
  something = 42;
  constructor() {
    super(_Test), _initClass();
  }
}();

export { _Test as Test };
