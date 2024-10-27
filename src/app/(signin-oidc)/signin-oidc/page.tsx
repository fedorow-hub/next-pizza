
import SigninOidc from "@/auth/SigninOidc";
import { Container } from "@/components/shared/container";
import React from "react";

export default function SignInPage() {
  
  return (
    <Container className="mt-10">
      <SigninOidc/>      
    </Container>
  );
}
