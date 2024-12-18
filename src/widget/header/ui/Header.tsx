import { LINK } from "@/shared/config";
import Link from "next/link";
import { HeaderRightContent } from "./HeaderRightContent";

export const Header = async () => {
  return (
    <div className="fixed left-0 top-0 z-30 mx-auto flex h-16 w-full max-w-[1200] items-center justify-between bg-white px-4">
      <div>
        <Link href={LINK.HOME}>
          <p className="font-bold">conduit</p>
        </Link>
      </div>
      <HeaderRightContent />
    </div>
  );
};
