export type PayType = "briva" | "bni";
export interface LoginBodyProps {
  username: string;
  password: "hello" | "world";
}
export interface CreateVaTopBodyProps {
  amount: string;
  pay_type: PayType;
}
export interface InforTrxBodyProps {
  num_code: string;
}
