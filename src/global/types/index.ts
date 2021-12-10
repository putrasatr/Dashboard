export type PayType = "briva" | "bni";
export type Props = "brivani";
export interface LoginBodyProps {
  username: string;
  password: "hello" | "world";
}
export interface CreateVaTopBodyProps {
  amount: string;
  pay_type: PayType;
}
export interface InforTrxBodyProps {
  (type: PayType): any;
}
export type CheckProps = {
  num_code: string;
};

export const va: InforTrxBodyProps = (type): Props => {
  if (type === "bni") return "brivani";
  return "brivani";
};
type RGB = {
  r: number;
  g: number;
  b: number;
};

type Color = {
  color1: RGB;
  color2: RGB;
};

type toSwitch<T> = {
  [Property in keyof T]: boolean;
};

const colorSwitch: toSwitch<Color> = {
  color1: false,
  color2: false,
};
console.log(colorSwitch.color1);
