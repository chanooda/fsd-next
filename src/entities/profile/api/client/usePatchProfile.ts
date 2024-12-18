import { patchProfile } from "@/shared/api";
import { useMutation } from "@/shared/lib/client";
import { ProfilePatchParams } from "../profileDataType";

export const usePatchProfile = () => {
  return useMutation({
    mutationFn: async (req: ProfilePatchParams) => await patchProfile(req),
  });
};
