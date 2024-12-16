"use client";

import { PostUserParams } from "@/entities/auth/api/authDataType";
import { usePostUser } from "@/entities/auth/api/client";
import { postUserSchema } from "@/entities/auth/model";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const SignupPage = () => {
  // const [state, formAction, pending] = useActionState(signupAction, {});
  const router = useRouter();
  const { mutate, error } = usePostUser();

  const form = useForm<PostUserParams>({
    resolver: zodResolver(postUserSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const { errors } = form.formState;

  const onSubmit = form.handleSubmit((data) => {
    mutate(data, {
      onSuccess() {
        router.push("/signin");
      },
    });
  });

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          // action={formAction}
          className="mx-auto mt-48 flex w-full max-w-96 flex-col gap-8 p-4"
        >
          <p className="text-center text-xl font-bold">Signup</p>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between gap-2">
                  <FormLabel>Name</FormLabel>
                  <FormMessage>{errors?.name?.message}</FormMessage>
                </div>
                <FormControl>
                  <Input type="text" placeholder="name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between gap-2">
                  <FormLabel>Email</FormLabel>
                  <FormMessage>{errors?.email?.message}</FormMessage>
                </div>
                <FormControl>
                  <Input type="email" placeholder="email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between gap-2">
                  <FormLabel>Password</FormLabel>
                  <FormMessage>{errors?.password?.message}</FormMessage>
                </div>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between gap-2">
                  <FormLabel>Password Confirm</FormLabel>
                  <FormMessage>{errors?.passwordConfirm?.message}</FormMessage>
                </div>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="password-confirm"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
