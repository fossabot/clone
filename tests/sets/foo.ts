export class Foo {
  foo
  constructor(foo: unknown) {
    this.foo = foo
  }

  copy() {
    return new Foo(this.foo)
  }
}
