// Partial<T> - Makes all properties of an object optional.

interface User {
    name: string;
    age: number;
  }
  
  type PartialUser = Partial<User>;
  
  const partialUser: PartialUser = {
    name: 'John',
    age: 30,
  };
  
  // Readonly<T> - Makes all properties of an object read-only.
  
  interface Book {
    title: string;
    author: string;
  }
  
  type ReadonlyBook = Readonly<Book>;
  
  const readonlyBook: ReadonlyBook = {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
  };
  
  // The following line would cause a compilation error
  // readonlyBook.title = 'New Title';
  
  // Record<K, T> - Creates a type with keys of type K and values of type T.
  
  type Colors = 'red' | 'green' | 'blue';
  type ColorCodes = Record<Colors, string>;
  
  const colorCodes: ColorCodes = {
    red: '#FF0000',
    green: '#00FF00',
    blue: '#0000FF',
  };
  
  // The following line would cause a compilation error
  // colorCodes.yellow = '#FFFF00';
  
  // Pick<T, K> - Picks a subset of properties from an object.
  
  interface Car {
    make: string;
    model: string;
    year: number;
  }
  
  type CarInfo = Pick<Car, 'make' | 'model'>;
  
  const carInfo: CarInfo = {
    make: 'Toyota',
    model: 'Camry',
  };
  
  // The following line would cause a compilation error
  // carInfo.year = 2022;
  
  // Omit<T, K> - Omits a subset of properties from an object.
  
  interface Movie {
    title: string;
    director: string;
    year: number;
  }
  
  type MovieSummary = Omit<Movie, 'director' | 'year'>;
  
  const movieSummary: MovieSummary = {
    title: 'Inception',
  };
  
  // The following line would cause a compilation error
  // movieSummary.director = 'Christopher Nolan';
  
  // Exclude<T, U> - Excludes types from T that are assignable to U.
  
  type Numbers = 1 | 2 | 3 | 4 | 5;
  type EvenNumbers = Exclude<Numbers, 1 | 3 | 5>; // Results in type: 2 | 4
  
  const evenNumber: EvenNumbers = 2; // Valid
  // const oddNumber: EvenNumbers = 3; // Compilation error
  
  // Extract<T, U> - Extracts types from T that are assignable to U.
  
  type OddNumbers = Extract<Numbers, 1 | 3 | 5>; // Results in type: 1 | 3 | 5
  
  const oddNumber: OddNumbers = 3; // Valid
  // const evenNumber: OddNumbers = 2; // Compilation error
  
  // Required<T> - Makes all properties of an object required.
  
  interface Configuration {
    username?: string;
    password?: string;
  }
  
  type RequiredConfig = Required<Configuration>;
  
  const requiredConfig: RequiredConfig = {
    username: 'john_doe',
    password: 'secret_password',
  };
  
  // The following line would cause a compilation error
  // const missingPassword: RequiredConfig = {
  //   username: 'john_doe',
  // };
  