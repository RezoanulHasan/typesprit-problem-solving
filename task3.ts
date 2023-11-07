//Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."

class Cat {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

function isCat(obj: any): obj is Cat {
    return obj instanceof Cat;
}

const myCat = new Cat('MmmU');
const someObject = { name: 'Tomy', age: 2 };

if (isCat(myCat)) {
    console.log('Yes, it\'s a cat.');
} else {
    console.log('No, it\'s not a cat.');
}

if (isCat(someObject)) {
    console.log('Yes, it\'s a cat.');
} else {
    console.log('No, it\'s not a cat.');
}

