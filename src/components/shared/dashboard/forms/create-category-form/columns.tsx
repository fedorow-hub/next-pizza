"use client"

import { ColumnDef } from "@tanstack/react-table"
import DatatableRowActions from "./../create-user-form/data-table-row-actions"
import { Category } from "../../../../../../models/product";

interface ColumnProps{
  onEdit: (value: Category) => void;
  onDelete: (value: Category) => void;
}


export const getCategoryColumns = ({onEdit, onDelete} : ColumnProps): ColumnDef<Category>[] => [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Название",
  },
  {
    header: "Действия",
    id: "actions",
    cell: ({ row }) => <DatatableRowActions row = {row} onEdit = {onEdit} onDelete = {onDelete} />   
  },
]
