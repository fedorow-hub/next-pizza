'use client';

import { Container } from "@/components/shared/container";
import React, { useCallback, useMemo } from "react";
import { Api } from "@/services/api-client";
import { DashboardHeader } from "@/components/shared/dashboard/dashboard-header";
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { CreateCategoryForm } from "@/components/shared/dashboard/forms/create-category-form/create-category-form";
import { getCategoryColumns } from "@/components/shared/dashboard/forms/create-category-form/columns";
import { DataTable } from "@/components/shared/dashboard/forms/create-category-form/data-table";
import { Category } from "../../../../../models/product";

export default function AdminCategoriePage() {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [open, setOpen] = React.useState(false);
  const [selectedCategory, setselectedCategory] = React.useState<Category>();

  React.useEffect(() => {
    async function fetchCategories() {
      const data = await Api.categories.getAllCategory();
      setCategories(data);
    }
    fetchCategories();
  }, [open]);

  const onClickEdit = (category?: Category) => {  
    setselectedCategory(category);    
    setOpen(true);
  };

  const onDelete = useCallback(async (e: Category) => {
    const updatedCategories = await Api.categories.removeCategory(e.id);
    setCategories(updatedCategories);
  }, []);

  const onEdit = useCallback((e: Category) => onClickEdit(e), []);

  const onCloseModal = () => {
    setOpen(false);
  };    

  const columns = useMemo(() => getCategoryColumns({onEdit, onDelete}), [])

  return (
    <>
      <Container className="mt-10 p-6 bg-white rounded-lg">
        <DashboardHeader onClickEdit={onClickEdit} text={'Категории'}/>
        <DataTable columns={columns} data={categories} />
      </Container>

      <Dialog open={open} onOpenChange={onCloseModal}>
        <DialogContent className="p-6 bg-white overflow-hidden">
            <CreateCategoryForm values={selectedCategory} onClickAdd={onCloseModal}/>
        </DialogContent>
      </Dialog>
    </>
  );    
}
