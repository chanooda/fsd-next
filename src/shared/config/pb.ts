import PocketBase from "pocketbase";
import { backendBaseUrl } from ".";
import { fileUrl } from "./backend";

export const pb = new PocketBase(backendBaseUrl);

export const getFileUrl = (
  collection: string,
  id: string,
  fileName: string
) => {
  return `${fileUrl}${collection}/${id}/${fileName}`;
};
