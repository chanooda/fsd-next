"use client";

import { LINK } from "@/shared/config";
import { Button, ErrorMessage, Input, Separator } from "@/shared/ui";
import Link from "next/link";
import { useActionState } from "react";
import { signinErrorMapper } from "../api/authMapper";
import { signinAction } from "../api/server";

export const SigninPage = () => {
  const [state, formAction, isPending] = useActionState(
    signinAction,
    undefined,
  );
  const errorMessages = signinErrorMapper(state?.error);

  return (
    <>
      <form
        action={formAction}
        className="mx-auto mt-48 flex w-80 flex-col gap-4 p-4"
      >
        <p className="text-center text-xl font-bold">Signin</p>
        <div>
          <Input name="email" placeholder="email" />
          <ErrorMessage>{errorMessages?.email}</ErrorMessage>
        </div>
        <div>
          <Input name="password" type="password" placeholder="password" />
          <ErrorMessage>{errorMessages?.password}</ErrorMessage>
        </div>
        <Button type="submit" disabled={isPending}>
          로그인
        </Button>
        <div>
          <Separator />
          <div className="flex justify-end">
            <Link href={LINK.SIGNUP}>
              <Button variant="ghost">Signup</Button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};
