import { SigninPage } from "@/_pages/auth";
import { PageLayout } from "../_ui/PageLayout";

const page = async () => {
  return (
    <PageLayout>
      <SigninPage />
    </PageLayout>
  );
};

export default page;
