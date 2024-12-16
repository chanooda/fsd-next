import { useQuery } from "@/shared/lib/client";
import { authQueryKey } from "../queryKey";

export const useGetUser = (id: string) => {
  return useQuery({
    ...authQueryKey.detail(id),
    enabled: !!id,
  });
};
