import { typeToFlattenedError } from "zod";

export const zodErrorFlattenString = <T>(
  zodErrorFlatten: typeToFlattenedError<T>["fieldErrors"],
): Partial<Record<keyof T, string>> => {
  const obj: Partial<Record<keyof T, string>> = {};
  Object.keys(zodErrorFlatten).map((key) => {
    obj[key as keyof T] = zodErrorFlatten[key as keyof T]?.[0];
  });

  return obj;
};
