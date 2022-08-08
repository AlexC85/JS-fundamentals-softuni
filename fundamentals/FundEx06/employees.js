function employees(employeeArr){
class Employee{
    constructor(name, number){
        this.name = name;
        this.number = number;
    }
    hire(){
        console.log(`Name: ${this.name} -- Personal Number: ${this.number}`);
    }
}
for(let el of employeeArr){
    new Employee(el, el.length).hire();
}
}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])