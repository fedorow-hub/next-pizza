"use client"

import { ColumnDef } from "@tanstack/react-table"
import DatatableRowActions from "./../create-user-form/data-table-row-actions"
import { Category, Ingredient } from "../../../../../../models/product";

interface ColumnProps{
  onEdit: (value: Ingredient) => void;
  onDelete: (value: Ingredient) => void;
}

export const getIngredientColumns = ({onEdit, onDelete} : ColumnProps): ColumnDef<Ingredient>[] => [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Название",
  },
  {
    accessorKey: "price",
    header: "Цена",
  },
  {
    accessorKey: "imageUrl",
    header: "Изображение",
  },
  {
    header: "Действия",
    id: "actions",
    cell: ({ row }) => <DatatableRowActions row = {row} onEdit = {onEdit} onDelete = {onDelete} />   
  },
]
