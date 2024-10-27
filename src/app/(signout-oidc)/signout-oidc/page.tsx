
import SignoutOidc from "@/auth/SignoutOidc";
import { Container } from "@/components/shared/container";
import React from "react";

export default function SignOutPage() {
  
  return (
    <Container className="mt-10">
      <SignoutOidc/>      
    </Container>
  );
}
