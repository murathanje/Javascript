//          Inheritance
class Person{
    firstName =  "Murathan";

    write(){
        console.log(`Person name: ${this.firstName}`);
    }
}

// const person = new Person();
// person.write();


class Studens extends Person{

    write() {
        console.log(`Student name: ${this.firstName}`);
        super.write();
    }
}


const student = new Studens()
student.write();