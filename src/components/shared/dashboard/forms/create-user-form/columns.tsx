"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export enum UserRole {
  USER,
  ADMIN
}

export type User = {
  id: number
  fullName: string
  email: string
  login: string
  role: UserRole
  password: string
}

function onClickUpdate(id: number){
  console.log(id)
}

function onClickDelete(id: number){
  console.log(id)
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "fullName",
    header: "ФИО",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "login",
    header: "Логин",
  },
  {
    accessorKey: "role",
    header: "Роль",
    cell: ({ row }) => {
      const amount = UserRole[row.getValue("role") as number]
      return <div>{amount}</div>
    },
  },
  {
    header: "Действия",
    id: "actions",
    cell: ({ row }) => {
      const user = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={()=> onClickUpdate(user.id)}
            >
              Редактировать
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={()=> onClickDelete(user.id)}
            >
              Удалить
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
