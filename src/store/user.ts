import { UserAuthDto, UserLoginDto, UserRegisterDto } from './../models/user';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from ".";
import { loginUser, registerUser } from "../api/user";

export interface UserStoreState {
    userAuth: UserAuthDto | undefined,
}

const initialUserStoreState: UserStoreState = {
    userAuth: undefined,
}

const loginInfoStoringString = "loginInfo";

export const userStoreSlice = createSlice({
    name: "user",
    initialState: initialUserStoreState,
    reducers: {
        setUserAuth: (state, action: PayloadAction<UserAuthDto>) => {
            state.userAuth = action.payload;
        },
        logOutAuth: (state) => {
            state.userAuth = undefined;
        }
    }
})

// Export the actions, so we can dispatch them in other files.
export const { setUserAuth: setUserAuth, logOutAuth: logOutAuth } = userStoreSlice.actions;


export const loginUserAsync = (
    loginInfo: UserLoginDto,
): AppThunk<Promise<void>> => async (dispatch): Promise<void> => {
    const userAuth: UserAuthDto = await loginUser(loginInfo);
    dispatch(setUserAuth(userAuth));
    localStorage.setItem(loginInfoStoringString, JSON.stringify(loginInfo));
};

export const registerUserAsync = (
    userRegister: UserRegisterDto,
): AppThunk<Promise<void>> => async (dispatch): Promise<void> => {
    const userAuth: UserAuthDto = await registerUser(userRegister);
    dispatch(setUserAuth(userAuth));
    localStorage.setItem(loginInfoStoringString,
        JSON.stringify({ email: userRegister.email, password: userRegister.password, } as UserLoginDto));
};

export const tryAutoLogin = (
): AppThunk<Promise<void>> => async (dispatch): Promise<void> => {
    // see if the local storage has the loginInfo
    console.log("Trying autologin")

    const loginInfo: UserLoginDto = JSON.parse(
        localStorage.getItem(loginInfoStoringString)!
    );

    if (loginInfo) {
        await dispatch(loginUserAsync(loginInfo));
    }
};


export const selectUserAuth = (state: RootState) => state.user.userAuth;
export const selectHeaders = (state: RootState) => ({ 'Authorization': `Bearer ${state.user.userAuth!.token}` });

export default userStoreSlice.reducer;
