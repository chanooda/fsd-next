"use client";

import { LINK } from "@/shared/config";
import { Button } from "@/shared/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { hideLinkList } from "../config/link";

export const UnAuthRightContent = () => {
  const pathname = usePathname();

  if (hideLinkList.some((link) => pathname.includes(link))) return null;

  return (
    <Link href={LINK.SIGNIN}>
      <Button variant="ghost">Signin</Button>
    </Link>
  );
};
