import {Flour, Role, Size, Theme} from './types.tsx';
import React from 'react';
import {CALORIES_STAGE, HotStage, SIZE} from "./enums.tsx";

export interface IThemeContext {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export interface IMenuContext {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IShopCard {
  discount?: number;
  popular?: boolean;
  size?: Size;
  name?: string;
  category?: string;
  price?: string;
  inCart?: boolean;
  flour?: Flour;
  image?: string;
  key?: any;
}


export interface IUser {
  id: number
  login: string,
  role: Role
}

export interface IUserExtra {
  isActivated: boolean
}

export interface IUserProfile {
  name: string
  firstSurname: string
  secondSurname: string
  district: string
  phone: string
  email: string
  street: string
  city: string
}

export interface IRegisterResponseSuccess {
  access_token: string
  user: IUser
  profile: IUserProfile
  extra: IUserExtra
}

export interface IPizza {
  id: number;
  name: string;
  description: string;
  available: string;
  category_name: string;
  country: string;
  discount: number;
  hot_stage: HotStage;
  popular: boolean;
  rating: number;
  image: string;
  updated_at?: string;
  created_at?: string;
  average_cooking_speed: number;
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
}

export interface IReview {
  id: number
  user_id: string
  pizza_name: string
  text: string
  created_at: string
  updated_at: string
  liked: number
  user?: {
    id: number
    login: string
    email: string
  }
}

export interface IPizzaResponse extends IPizza {
  category?: ICategory;
  reviews?: IReview[]
  additional_options: IAdditionalOption[]
}


export interface IAdditionalOption {
  id: number
  pizza_name: string
  size: SIZE
  weight: number
  calories: number
  price: number
  calories_stage: CALORIES_STAGE
}