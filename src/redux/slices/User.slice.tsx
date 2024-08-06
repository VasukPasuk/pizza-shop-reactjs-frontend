import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRegisterResponseSuccess} from "../../typing/interfaces.tsx";



export interface IUserReduxState extends IRegisterResponseSuccess{
  isLoading: boolean;
  error: boolean;
}

const initialState: IUserReduxState = {
  user: {
    id: 0,
    login: "",
    role: "ADMIN"
  },
  profile: {
    city: "",
    district: "",
    email: "",
    firstSurname: "",
    name: "",
    phone: "",
    secondSurname: "",
    street: "",
  },
  isLoading: false,
  extra: {
    isActivated: false
  },
  access_token: "",
  error: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signup: (_, action: PayloadAction<IRegisterResponseSuccess>) => {
      const {user, profile, extra, access_token} = action.payload;
      return {
        user: user,
        profile: profile,
        extra: extra,
        access_token: access_token,
        isLoading: false,
        error: false
      }
    },
    signout: () => initialState,
    setUserError: (state, action:PayloadAction<boolean>) => {
      state.error = action.payload
    },
    setUserLoading: (state, action:PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export default userSlice.reducer
export const {signup, signout, setUserError, setUserLoading} = userSlice.actions