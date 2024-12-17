import { LINK } from "@/shared/config";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-bold">404</h1>
      <p className="text-xl">Page not found</p>
      <Link href={LINK.HOME}>
        <p className="mt-4 text-base underline">Go Home</p>
      </Link>
    </div>
  );
};

export default NotFoundPage;
