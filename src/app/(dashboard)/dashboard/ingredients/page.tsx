'use client';

import { Container } from "@/components/shared/container";
import React, { useCallback, useMemo } from "react";
import { Api } from "@/services/api-client";
import { DashboardHeader } from "@/components/shared/dashboard/dashboard-header";
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { CreateIngredientForm } from "@/components/shared/dashboard/forms/create-ingredient-form/create-ingredient-form";
import { DataTable } from "@/components/shared/dashboard/forms/create-ingredient-form/data-table";
import { getIngredientColumns } from "@/components/shared/dashboard/forms/create-ingredient-form/columns";
import { Ingredient } from "../../../../../models/product";

export default function AdminIngredientsPage() {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [open, setOpen] = React.useState(false);
  const [selectedIngredient, setSelectedIngredient] = React.useState<Ingredient>();

  React.useEffect(() => {
    async function fetchIngredients() {
      const data = await Api.ingredients.getAll();
      setIngredients(data);
    }
    fetchIngredients();
  }, [open]);

  const onClickEdit = (ingredient?: Ingredient) => {  
    setSelectedIngredient(ingredient);    
    setOpen(true);
  };

  const onDelete = useCallback(async (e: Ingredient) => {
    const updatedIngredients = await Api.ingredients.removeIngredient(e.id);
    setIngredients(updatedIngredients);
  }, []);

  const onEdit = useCallback((e: Ingredient) => onClickEdit(e), []);

  const onCloseModal = () => {
    setOpen(false);
  };    

  const columns = useMemo(() => getIngredientColumns({onEdit, onDelete}), [])

  return (
    <>
      <Container className="mt-10 p-6 bg-white rounded-lg">
        <DashboardHeader onClickEdit={onClickEdit} text={'Ингредиенты'}/>
        <DataTable columns={columns} data={ingredients} />
      </Container>

      <Dialog open={open} onOpenChange={onCloseModal}>
        <DialogContent className="p-6 bg-white overflow-hidden">
            <CreateIngredientForm values={selectedIngredient} onClickAdd={onCloseModal}/>
        </DialogContent>
      </Dialog>
    </>
  );    
}
