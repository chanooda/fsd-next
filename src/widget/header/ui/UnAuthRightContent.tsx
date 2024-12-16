import { LINK } from "@/shared/config";
import { Button } from "@/shared/ui";
import Link from "next/link";

export const UnAuthRightContent = () => {
  return (
    <Link href={LINK.SIGNIN}>
      <Button variant="ghost">Signin</Button>
    </Link>
  );
};
