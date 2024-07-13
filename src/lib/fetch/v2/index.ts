import { ResponseData, User } from "@/lib/definitions/technofest";
import client from "@/lib/fetch/v2/axios";

export const csrf = () => client.get("/sanctum/csrf-cookie");

export const login = async (
  name: string,
  email: string,
  avatar: string,
  provider: string,
  access_token: string,
): Promise<ResponseData<{ access_token: string; user: User }>> => {
  await csrf();

  const res = await client.post("/api/v2/auth/login", {
    name,
    email,
    avatar,
    provider,
    access_token,
  });

  return res.data;
};

export const userGetCurrent = async (
  token: string,
  relations?: string[],
): Promise<ResponseData<User>> => {
  const res = await client.get("/api/v2/user", {
    params: {
      rel: relations,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
