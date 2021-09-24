
export enum UserRole {
    Normal = "Normal",
    Admin = "Admin",
}

export interface UserRegisterDto {
    email: string;
    password: string;
}

export interface UserLoginDto {
    email: string;
    password: string;
}

export interface UserOutputDto {
    id: string;
    name: string;
    role: UserRole;
    email: string;
    emailVerified: boolean;
}

export interface UserAuthDto {
    user: UserOutputDto;
    token: string;
}

export interface UserVerificationCodeDto {
    code: string;
}

export interface UserRestPasswordVerificationCode {
    code: string;
    newPassword: string;
}
