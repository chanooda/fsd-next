import zod from "zod";

export const avatarSchema = zod.object({
  prevUrl: zod.string(),
  file: zod.instanceof(File),
});

export type AvatarForm = zod.infer<typeof avatarSchema> | undefined;
