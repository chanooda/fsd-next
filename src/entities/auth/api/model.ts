import { GetUserRes, SignUptReq } from "@/shared/api";

export interface User extends GetUserRes {}

export interface SignupMutateParams extends SignUptReq {}
