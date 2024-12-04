import PocketBase from "pocketbase";
import { backendBaseUrl } from "../config";

export const pb = new PocketBase(backendBaseUrl);
