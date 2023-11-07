//Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.

interface Car {
    make: string;
    model: string;
    year: number;
}

interface Driver {
    name: string;
    licenseNumber: string;
}

function combineCarAndDriver(car: Car, driver: Driver): { car: Car; driver: Driver } {
    return { car, driver };
}

const myCar: Car = {
    make: 'Toyota',
    model: 'newTT',
    year: 2021
};

const myDriver: Driver = {
    name: 'Rezoanul Hasan',
    licenseNumber: '123456'
};

const combinedInfo = combineCarAndDriver(myCar, myDriver);


console.log(combinedInfo);