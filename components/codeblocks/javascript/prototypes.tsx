import { Example } from "../exampletypes";

export const prototypes: Example = {
  code: `function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log(Hello);
};

const person = new Person('Alice');
person.greet(); // Hello, Alice
`,
  language: "jsx",
  filename: "prototypes.jsx",
  highlightLines: [],
};
