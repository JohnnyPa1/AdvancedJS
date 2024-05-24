class Employee {
  constructor(nume) {
    this.name = nume;
  }

  sayHello() {
    console.log(`Salut, sunt ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(fname, lname) {
    super(fname);
    this.lname = lname;
  }
  sayHello() {
    console.log(`Salut, sunt ${this.lname} ${this.name}`);
  }
}

class Boss extends Manager {}

let ang = new Employee("Ion");
let man = new Manager("Vasile","Popescu");
ang.sayHello();
man.sayHello();
