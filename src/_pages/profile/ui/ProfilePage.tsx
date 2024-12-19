import { getTokenWithServer } from "@/shared/lib/server";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui";
import { notFound } from "next/navigation";
import { Articles } from "./Articles";
import { Profile } from "./Profile";

export const ProfilePage = async () => {
  const isAuth = await getTokenWithServer();

  if (!isAuth) {
    notFound();
  }

  return (
    <div className="max-auto flex min-h-full w-full max-w-[1200] flex-col p-4 pt-20">
      <Profile />
      <Tabs
        className="mt-4 flex w-full flex-col items-center"
        defaultValue="article"
      >
        <TabsList className="w-full max-w-[400px]">
          <TabsTrigger value="article" className="w-full">
            Articles
          </TabsTrigger>
          <TabsTrigger value="follow" className="w-full">
            Follow
          </TabsTrigger>
        </TabsList>
        <TabsContent value="article">
          <Articles />
        </TabsContent>
        <TabsContent value="follow">
          <p>Follow</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};
