import client from "@/lib/fetch/v2/axios";

export const csrf = () => client.get("/sanctum/csrf-cookie");
