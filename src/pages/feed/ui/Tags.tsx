import { getTags } from "@/shared/api";

export const Tags = async () => {
  const tags = await getTags();

  return <div>Tags</div>;
};
