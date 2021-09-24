import { UserAuthDto, UserLoginDto, UserRegisterDto, UserVerificationCodeDto } from './../models/user';
import axios, { AxiosResponse } from "axios";
import { apiUrl } from "./apiHandler";
import HttpException from '../exceptions/HttpException';

const userApiUrl = apiUrl + 'users'

export const registerUser = async (userCreatingDto: UserRegisterDto): Promise<UserAuthDto> => {
    const res: AxiosResponse = await axios.post(userApiUrl + '/register', userCreatingDto);

    if (res.status > 400) {
        throw new HttpException(res.status, "註冊失敗", res.data);
    }

    return res.data as UserAuthDto;
}

export const loginUser = async (userLoginDto: UserLoginDto): Promise<UserAuthDto> => {

    try {
        const res: AxiosResponse = await axios.post(userApiUrl + '/login', userLoginDto);
        return res.data as UserAuthDto;
    } catch (e: any) {
        if (e && e.response) {
            throw new HttpException(e.response.status, "登入失敗", e.response.data);
        }

        throw new HttpException("UNKNOWN", "登入失敗", "無細節");
    }
}


export const verifiyEmailTest = async (): Promise<string> => {
    const res: AxiosResponse = await axios.post(`${userApiUrl}/verify-email/test`);

    if (res.status > 400) {
        throw new HttpException(res.status, "登入失敗", res.data);
    }

    return res.data
}

export const sendVerificationEmail = async (userId: string): Promise<string> => {
    const res: AxiosResponse = await axios.post(`${userApiUrl}/verify-email/send/${userId}`);

    if (res.status > 400) {
        throw new HttpException(res.status, "驗證信發送失敗", res.data);
    }

    return res.data
}

export const userVerifyEmail = async (userId: string, userVerificationCode: UserVerificationCodeDto): Promise<UserAuthDto> => {
    const res: AxiosResponse = await axios.post(`${userApiUrl}/verify-email/verify/${userId}`, userVerificationCode);

    if (res.status > 400) {
        throw new HttpException(res.status, "無法驗證信箱", res.data);
    }

    return res.data as UserAuthDto;
}

export const sendPasswordResettingVerficationEmail = async (email: string): Promise<string> => {
    const res: AxiosResponse = await axios.post(`${userApiUrl}/reset-password/send-email/${email}`);

    if (res.status > 400) {
        throw new HttpException(res.status, "無法寄送重置密碼驗證信", res.data);
    }

    return res.data;
}

export const updateUserPassword = async (email: string): Promise<UserAuthDto> => {
    const res: AxiosResponse = await axios.post(`${userApiUrl}/reset-password/reset/${email}`);

    if (res.status > 400) {
        throw new HttpException(res.status, "密碼更新失敗", res.data);
    }

    return res.data as UserAuthDto
}
