function before(param: number) {
  return function(target: Foo, name: any, descriptor: any) {
    const baz = descriptor.value;
    descriptor.value = function(val: string) {
      console.log("确定登录吗", param);
      return baz.call(this, val);
    };
  };
}
function after(param: number) {
  return function(target: Foo, name: any, descriptor: any) {
    const baz = descriptor.value;
    descriptor.value = function(val: string) {
      baz.call(this, val);
      return console.log("登录成功，并获取了用户信息", param);
    };
  };
}

export default class Foo {
  constructor() {
    this.login();
  }

  @before(1)
  @after(2)
  login() {
    console.log("login success");
  }
}

// const foo = new Foo();
// foo.login();

// function log(fn: (key: string) => void) {
//   return function(target: Function) {
//     target.prototype.log = function(key: string) {
//       fn(this[key]);
//     };
//   };
// }

// @log(alert)
// export default class Foo {
//   bar = "bar";
// }

// const foo = new Foo();
// foo.log("bar");
