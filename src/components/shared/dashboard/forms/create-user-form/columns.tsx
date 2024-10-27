"use client"

import { ColumnDef } from "@tanstack/react-table"
//import { User, UserRole } from "../../../../../../models/user"
import DatatableRowActions from "./data-table-row-actions"
import { User, UserRole } from "../../../../../../api/api";

interface ColumnProps{
  onEdit: (value: User) => void;
  onDelete: (value: User) => void;
}


export const getUserColumns = ({onEdit, onDelete} : ColumnProps): ColumnDef<User>[] => [
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
    cell: ({ row }) => <DatatableRowActions row = {row} onEdit = {onEdit} onDelete = {onDelete} />   
  },
]
