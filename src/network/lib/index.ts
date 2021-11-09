import {
  CreateVaTopBodyProps,
  InforTrxBodyProps,
  LoginBodyProps,
} from "../../global/types";
import { request } from "../apiClient";

export const postLogin = (body: LoginBodyProps) =>
  request.post("auth/login", body);

export const postCreateVaTopup = (body: CreateVaTopBodyProps) =>
  request.post("topup", body);

export const postInfoTrx = (body: InforTrxBodyProps) =>
  request.post("info/trx", body);
