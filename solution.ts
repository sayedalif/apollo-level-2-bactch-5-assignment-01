function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper === 'undefined') {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter(item => item.rating >= 4.0);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === 'string') {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (!products || products.length === 0) {
    return null;
  }

  let highestPricedItem = products[0];
  for (const element of products) {
    if (element.price > highestPricedItem.price) highestPricedItem = element;
  }
  return highestPricedItem;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Sunday || day === Day.Saturday) {
    return 'Weekend';
  } else {
    return 'Weekday';
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject(new Error('Negative number not allowed'));
    } else {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    }
  });
}
