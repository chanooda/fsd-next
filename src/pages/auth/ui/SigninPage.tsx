"use client";

import { signinAction } from "@/entities/auth/model/server";
import { Button, ErrorMessage, Input } from "@/shared/ui";
import { useActionState } from "react";

export const SigninPage = () => {
  const [state, formAction, isPending] = useActionState(signinAction, {});

  return (
    <>
      <form
        action={formAction}
        className="mx-auto mt-40 flex w-80 flex-col gap-4"
      >
        <p className="text-center text-xl font-bold">Signin</p>
        <div>
          <Input name="email" placeholder="email" />
          <ErrorMessage>{state?.email}</ErrorMessage>
        </div>
        <div>
          <Input name="password" type="password" placeholder="password" />
          <ErrorMessage>{state?.password}</ErrorMessage>
        </div>
        <Button type="submit">로그인</Button>
      </form>
    </>
  );
};
