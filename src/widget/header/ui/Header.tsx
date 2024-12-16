import { checkIsAuthInServer } from "@/entities/auth/model/server";
import { LINK } from "@/shared/config";
import { Button } from "@/shared/ui";
import Link from "next/link";

export const Header = async () => {
  const isAuth = await checkIsAuthInServer();
  return (
    <div className="mx-auto flex w-full max-w-[1200] items-center justify-between px-4 py-2">
      <div>
        <Link href={LINK.HOME}>
          <p className="font-bold">conduit</p>
        </Link>
      </div>
      <div>
        <Link href={LINK.SIGNIN}>
          {isAuth ? <div>auth</div> : <Button variant="ghost">Signin</Button>}
        </Link>
      </div>
    </div>
  );
};
