import { ProfilePage } from "@/_pages/profile";
import { PageLayout } from "../_ui/PageLayout";

const page = async () => {
  return (
    <PageLayout>
      <ProfilePage />
    </PageLayout>
  );
};

export default page;
