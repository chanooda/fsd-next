import { LINK } from "@/shared/config";
import Link from "next/link";
import { HeaderRightContent } from "./HeaderRightContent";

export const Header = async () => {
  return (
    <div className="fixed left-0 top-0 z-30 h-16 w-full bg-white px-4">
      <div className="mx-auto flex h-full w-full max-w-[1200] items-center justify-between">
        <div>
          <Link href={LINK.HOME}>
            <p className="font-bold">conduit</p>
          </Link>
        </div>
        <HeaderRightContent />
      </div>
    </div>
  );
};
