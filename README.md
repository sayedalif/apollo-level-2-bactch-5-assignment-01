# What are some differences between interfaces and types in TypeScript?

## In order to know the difference between interface and type, first we have to know what is interface and type?

**what is interface?**

Interface is a way to define object properties and it's data types. it specifies the properties and method object must have without their implementation. interface is used to enforce type checking and ensure object follows specific shape. interface are compile time construct and they don't exist at runtime.

**syntax of interface**

First we have to write the keyword `interface` then we have to give a name of that interface, like for the example down below we are declaring `string` data type for `name, email properties`. then on skills data type is `array of strings` where we are going to hold user skills. for social media name it's an `array of object` with two properties `mediaName and accountName` for social media user name and the media user is using.

```ts
interface User {
  name: string;
  email: string;
  skills: string[];
  socials: { mediaName: string; accountName: string }[];
}
```

**what is type?**

type alias or type is way to define data type for a single variable value or for an object, type can do both😉. type alias is used so that the code becomes more readable and we can maintain it easily. **please note: type alias does not create a new type rather it refers to existing one.**

**syntax of type alias**

First we have to write the keyword `type` followed by alias name then the desired data type according to your needs. here in the first example we are declaring data type for a user name with `string`. secondly we have `IsAdmin` which is a `boolean` data type to check if the user is admin or or not. then we have object data type which has x,y,z coordinates properties in it and the data types are number then we have declared data type for `add` function where we have two parameters num1, num2 both have number data type and the function is returning a number.

```ts
type UserName = string;
type IsAdmin = boolean;

type coordinates = {
  X: number;
  Y: number;
  Z: number;
};

type Add = (num1: number, num2: number) => number;
```

As you can see for yourself using interface we can only define data types for object and using type alias we can define data types for both a single data type and object. in both cases while declaring the data type I have used [Pascal case](https://www.tuple.nl/en/knowledge-base/pascal-case) it's just a convention.

Here how we can combine data types using union in type alias and extends in interface

```ts
type Address = string;
type HouseNumber = string;

type Location = Address & HouseNumber;

interface Car {
  model: string;
  year: number;
  color?: string;
};

interface Vehicle extends {
  releasedDate: string;
};

```

The problem comes while defining data types for array or function in `interface`, as you can see it doesn't look clean compare to type alias.

```ts
// defining array of numbers

interface ArrNum {
  [index: number]: number;
}

const numbers: ArrNum = [1, 2, 3, 45];

// defining function using interface

interface Add {
  (num1: number, num2: number): number;
}

const add: Add = (num1, num2) => {
  return num1 + num2;
};
```

so these are the differences between `types` and `interface`. I think we should use type more then interface because it looks more clean.

# What is the use of the keyof keyword in TypeScript? Provide an example.

### keyof is used to create object property liters. typescript keyof property is mostly used with generics to extract object properties.

Here are two example of keyof. on the first example we are extracting all the properties from the User type. then we are using it in the person object which we are passing to the getPropertyVal function get the properties values from the object. we are using generics on that function the first generics accept the object and becomes a object data type then the second generics is used to make strict type check so that only that object properties data can be passed into this is when keyof comes into play by looping through the object properties and extending them to the "K" generics

```ts
// example-01:
type User = {
  _id: number;
  name: string;
  email: string;
  age: number;
  address: string;
};

type UserKeys = keyof User; // _id, name, email...

// example-02:
const person: User = {
  _id: 1,
  name: 'John',
  age: 25,
  email: 'example@gamil.com',
  address: 'Dhaka',
};

function getPropertyVal<T, K extends keyof T>(obj: T, property: K): T[K] {
  return obj[property];
}

const name = getPropertyVal(person, 'name');
console.log(name); // John
```

Explain the difference between any, unknown, and never types in TypeScript.

What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

What is type inference in TypeScript? Why is it helpful?

How does TypeScript help in improving code quality and project maintainability?

Provide an example of using union and intersection types in TypeScript.
