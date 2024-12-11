import { SignupMutateParams } from "@/entities/auth";
import { signup } from "@/shared/api";
import { Button, Input } from "@/shared/ui";

export const SignupPage = () => {
  const signupAction = async (formData: FormData) => {
    "use server";
    const req: SignupMutateParams = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      passwordConfirm: formData.get("passwordConfirm") as string,
      verified: true,
      emailVisibility: true,
    };
    await signup(req);
  };

  return (
    <div>
      <form
        action={signupAction}
        className="mx-auto mt-48 flex w-full max-w-96 flex-col gap-2 p-4"
      >
        <Input type="text" name="name" placeholder="name" required />
        <Input type="email" name="email" placeholder="email" required />
        <Input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="password-confirm"
          required
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
