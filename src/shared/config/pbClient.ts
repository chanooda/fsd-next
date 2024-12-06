import PocketBase from "pocketbase";
import { backendBaseUrl } from ".";

export const pb = new PocketBase(backendBaseUrl);
