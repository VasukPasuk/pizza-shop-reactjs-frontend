import API from "./axios";
import {IRegisterResponseSuccess} from "../typing/interfaces.tsx";

export const $register = async (email: string, login: string, password: string) => {
  return await API.post<IRegisterResponseSuccess>("auth/login", {
    email: email,
    password: password,
    login: login,
  })
}

export const $login = async (email: string, password: string) => {
  return await API.post<IRegisterResponseSuccess>("auth/login", {
    email: email,
    password: password,
  })
}