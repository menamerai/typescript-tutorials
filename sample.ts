// Declaring types

let helloWorld: string = "Heya!";
function someFunction(param1: string, param2: number, defaultParam: string = "Eyo", optionalParam?: boolean): boolean {
    return false;
}

// Interfaces

interface Person {
    name: string,
    age: number
}
const adam: Person = {
    name: "Adam",
    age: 19
}
function addPerson(person: Person): Person {
    return person;
}
class PersonAccount {
    name: string;
    age: number;

    constructor(person: Person) {
        this.name = person.name;
        this.age = person.age;
    }
}
const murphy: Person = new PersonAccount({ name: "Murphy", age: 18 });

// Composing types

type BasicColor = "red" | "yellow" | "blue";
function getLength(param: string | string[]) {
    return param.length;
}
function patterMatch(param: number | string | boolean): number | string | boolean {
    // you can probably use switch statements for these
    if (typeof param === "number") {
        return 999;
    } else if (typeof param === "string") {
        return "Yee haw";
    } else if (typeof param === "boolean") {
        return true;
    } else {
        return "How did you get here????";
    }
}

// Generics
type NumberArray = Array<number>;
type PersonArray = Array<Person>;
interface Backpack<Type> {
    items: Array<Type>;
    signature: Type;
}
const backpack: Backpack<string> = {
    items: ["item1", "item2"],
    signature: "toothbrush"
};