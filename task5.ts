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