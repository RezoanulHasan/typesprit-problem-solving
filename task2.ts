interface Person {
    address?: {
        city: string;
        street: string;
    };
    phone?: string;
}

function getAddressCity(person: Person): string | undefined {
    return person.address?.city;
}

const person1: Person = {
    address: {
        city: 'Bogra',
        street: 'TMSS'
    },
    phone: '01734639066'
};

const person2: Person = {
    phone: '0170000000'
};

console.log(getAddressCity(person1));
