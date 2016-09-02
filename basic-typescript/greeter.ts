
interface Person {
    firstName: string;
    lastName: string;
}

class MyProgram {

    constructor () {
       function greeter(person:Person) {

            return "Hello, " + person.firstName;
        }

        var user = {firstName: 'Jim', lastName:'Lynch'};

        console.log(greeter(user));
    }
}

var program = new MyProgram();

