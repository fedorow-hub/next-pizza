'use client';

import { Container } from "@/components/shared/container";
import React from "react";
import { CreateUserForm } from "@/components/shared/dashboard/forms/create-user-form/create-user-form";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "@/components/shared/dashboard/forms/create-user-form/columns";
import { Api } from "@/services/api-client";
import { DashboardHeader } from "@/components/shared/dashboard/dashboard-header";
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { User } from "../../../../../models/user";

export default function AdminUserPage() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [open, setOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState<User>();

  React.useEffect(() => {
    async function fetchUsers() {
      const data = await Api.users.getAll();
      setUsers(data);
    }
    fetchUsers();
  }, [open]);

  const onClickEdit = (user?: User) => {  
    setSelectedUser(user);    
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };
    

  return (
    <>
      <Container className="mt-10 p-6 bg-white rounded-lg">
        <DashboardHeader onClickEdit={onClickEdit} text={'Пользователи'}/>
        <DataTable columns={columns} data={users} />
      </Container>

      <Dialog open={open} onOpenChange={onCloseModal}>
        <DialogContent className="p-6 bg-white overflow-hidden">
          <CreateUserForm onClickAdd={onCloseModal}/>
        </DialogContent>
      </Dialog>
    </>
  );
    
}
