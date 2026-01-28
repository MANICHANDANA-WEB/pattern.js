class Student {
  constructor(name, age) {

    this.name = name;
    this.age = age;
  }
  displayDetails() {
    console.log("Name:", this.name);
    console.log("Age:", this.age);
  }
}

const student1 = new Student("Amit", 20);
const student2 = new Student("Riya", 22);

console.log("Student 1 Details:");
console.log(student1.name);
console.log(student1.age);

console.log("\nStudent 2 Details:");
console.log(student2.name);
console.log(student2.age);

console.log("\nUsing method:");
student1.displayDetails();
