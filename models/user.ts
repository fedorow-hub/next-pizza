import { UserRole } from "@/components/shared/dashboard/forms/create-user-form/columns"

export interface User
{
    id: number
    login: string
    fullName: string
    email: string
    password: string
    //Verified: string
    role: UserRole
}