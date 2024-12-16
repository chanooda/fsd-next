import { getUser } from "@/shared/api";
import { createQueryKeys } from "@lukemorales/query-key-factory";

export const authQueryKey = createQueryKeys("users", {
  detail: (userId: string) => ({
    queryKey: ["user", userId],
    queryFn: () => getUser({ id: userId }),
  }),
});
