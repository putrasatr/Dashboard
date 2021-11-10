import { useState } from "react";

export default function useArray(defaultValue: any[]) {
  const [array, setArray] = useState<any[]>(defaultValue);
  const push = (a: any) => {
    const newArray = [a, ...array];
    setArray(newArray);
  };
  const filter = (callback: (item: number) => boolean) => {
    setArray((a) => a.filter(callback));
  };
  const remove = (index: number) => {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  };
  const clear = () => setArray([]);
  return { array, push, set: setArray, filter, remove, clear };
}
type Home = (home: number) => void;
type SomeObject = {
  name: string;
  age: number;
  (someArg: number): boolean | string;
};
type SomeConstructor = {
  new (s: string): SomeObject;
};
class Circle {
  static pi: number = 3.24;
  static calculateArea(radius: number): Home {
    const a = Number(this.pi.toFixed(2));
    return (ko) => console.log(a);
  }
  static han(home: SomeConstructor) {
    return home;
  }
}
export const circleProps = new Circle();
export const fn = (props: SomeObject): string | boolean => {
  return props(23);
};

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): string {
  if (obj.length >= minimum) {
    return "G";
  } else {
    return "d";
  }
}
export const arr = minimumLength([1, 2, 3], 6).length;
