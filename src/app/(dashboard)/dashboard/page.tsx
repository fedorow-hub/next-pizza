'use client';

import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import React from "react";
import { DashboardMenu } from "@/components/shared/dashboard/dashboard-menu";

export default function AdminPage() {

  return (
    <Container className="mt-10">
      <Title text="Страница администратора" className="font-extrabold mb-8 text-[36px]" />
      <DashboardMenu/>
    </Container>
  );
}
