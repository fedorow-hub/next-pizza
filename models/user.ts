

export interface User
{
    id: number
    login: string
    fullName: string
    email: string
    password: string
    role: UserRole
}

export enum UserRole {
    USER,
    ADMIN
}