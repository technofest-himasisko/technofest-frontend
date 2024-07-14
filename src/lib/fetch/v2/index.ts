import { RecursivePartial } from "@/lib/definitions/common";
import {
  Avatar,
  Competition,
  Event,
  EventRegistration,
  EventRegistrationPayment,
  Faq,
  Festival,
  ResponseData,
  Seminar,
  User,
} from "@/lib/definitions/technofest";
import { getServerSanctumToken } from "@/lib/utils/common";
import { fetchAPI } from "./client";

export const csrf = () =>
  fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sanctum/csrf-cookie`);

export const attempt = async (
  email: string,
  password: string,
  withToken: boolean = false,
): Promise<ResponseData<{ access_token: string; user: User }>> => {
  await csrf();

  const response = await fetchAPI(
    "/auth/credentials/attempt",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    },
    { token: withToken },
  );

  return response;
};

export const register = async (
  name: string,
  email: string,
  password: string,
  withToken: boolean = false,
): Promise<ResponseData<User>> => {
  await csrf();

  const response = await fetchAPI(
    "/auth/credentials/register",
    {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    },
    { token: withToken },
  );

  return response;
};

export const login = async (
  name: string,
  email: string,
  avatar: string,
  provider: string,
  access_token: string,
): Promise<ResponseData<{ access_token: string }>> => {
  await csrf();

  const response = await fetchAPI("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      avatar,
      provider,
      access_token,
    }),
  });

  return response;
};

export const userGetCurrent = async (
  relations?: string[],
): Promise<ResponseData<User>> => {
  const response = await fetchAPI(
    "/user",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${(await getServerSanctumToken()) as string}`,
      },
    },
    { rel: relations },
  );

  return response;
};

export const userUpdateProfile = async (
  user: RecursivePartial<User>,
): Promise<ResponseData<User>> => {
  await csrf();

  const response = await fetchAPI("/user", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${(await getServerSanctumToken()) as string}`,
    },
    body: JSON.stringify({
      ...user,
    }),
  });

  return response;
};

export const userUpdatePassword = async (
  old_password: string,
  new_password: string,
): Promise<ResponseData<null>> => {
  await csrf();

  const response = await fetchAPI("/user/password", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${(await getServerSanctumToken()) as string}`,
    },
    body: JSON.stringify({
      old_password,
      new_password,
    }),
  });

  return response;
};

export const userLogout = async () => {
  const response = await fetchAPI("/user/auth/logout", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${(await getServerSanctumToken()) as string}`,
    },
  });

  return response;
};

export const userDelete = async (): Promise<ResponseData<null>> => {
  const response = await fetchAPI("/user", {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${(await getServerSanctumToken()) as string}`,
    },
  });

  return response;
};

export const userGetAllEvents = async (): Promise<
  ResponseData<Event<Competition | Seminar>[]>
> => {
  const response = await fetchAPI("/user/events", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(await getServerSanctumToken()) as string}`,
    },
  });

  return response;
};

export const userGetRegistrationByEventCodename = async (
  codename: string,
): Promise<ResponseData<EventRegistration>> => {
  const response = await fetchAPI(`/user/events/${codename}/registration`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(await getServerSanctumToken()) as string}`,
    },
  });

  return response;
};

export const userCreateRegistrationByEventCodename = async (
  codename: string,
  body?: { teamName?: string; participationMethod?: string },
): Promise<ResponseData<EventRegistration>> => {
  await csrf();

  const response = await fetchAPI(`/user/events/${codename}/registration`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${(await getServerSanctumToken()) as string}`,
    },
    body: JSON.stringify({
      name: body?.teamName,
      participation_method: body?.participationMethod,
    }),
  });

  return response;
};

export const userGetAllRegistrations = async (): Promise<
  ResponseData<EventRegistration[]>
> => {
  const response = await fetchAPI("/user/registrations", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(await getServerSanctumToken()) as string}`,
    },
  });

  return response;
};

export const userUpdateRegistrationByUid = async (
  registrationUid: string,
  registration: RecursivePartial<EventRegistration>,
): Promise<ResponseData<EventRegistration>> => {
  await csrf();

  const response = await fetchAPI(`/user/registrations/${registrationUid}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${(await getServerSanctumToken()) as string}`,
    },
    body: JSON.stringify({
      ...registration,
    }),
  });

  return response;
};

export const userDeleteRegistrationByUid = async (registrationUid: string) => {
  const response = await fetchAPI(`/user/registrations/${registrationUid}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${(await getServerSanctumToken()) as string}`,
    },
  });

  return response;
};

export const userAttachToRegistrationByUid = async (
  registrationUid: string,
): Promise<ResponseData<undefined>> => {
  const response = await fetchAPI(
    `/user/registrations/${registrationUid}/attach`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${(await getServerSanctumToken()) as string}`,
      },
    },
  );

  return response;
};

export const userDetachFromRegistrationByUid = async (
  registrationUid: string,
): Promise<ResponseData<undefined>> => {
  const response = await fetchAPI(
    `/user/registrations/${registrationUid}/detach`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${(await getServerSanctumToken()) as string}`,
      },
    },
  );

  return response;
};

export const userAttachOtherUserToRegistrationByUid = async (
  registrationUid: string,
  userUid: string,
): Promise<ResponseData<undefined>> => {
  const response = await fetchAPI(
    `/user/registrations/${registrationUid}/users/${userUid}/attach`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${(await getServerSanctumToken()) as string}`,
      },
    },
  );

  return response;
};

export const userDetachOtherUserFromRegistrationByUid = async (
  registrationUid: string,
  userUid: string,
): Promise<ResponseData<undefined>> => {
  const response = await fetchAPI(
    `/user/registrations/${registrationUid}/users/${userUid}/detach`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${(await getServerSanctumToken()) as string}`,
      },
    },
  );

  return response;
};

export const userGetPaymentById = async (
  paymentId: string,
): Promise<ResponseData<EventRegistrationPayment>> => {
  const response = await fetchAPI(`/user/payments/${paymentId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(await getServerSanctumToken()) as string}`,
    },
  });

  return response;
};

export const userUpdatePaymentById = async (
  paymentId: string,
  payment: RecursivePartial<EventRegistrationPayment>,
): Promise<ResponseData<EventRegistrationPayment>> => {
  await csrf();

  const response = await fetchAPI(`/user/payments/${paymentId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${(await getServerSanctumToken()) as string}`,
    },
    body: JSON.stringify({
      ...payment,
    }),
  });

  return response;
};

export const festivalGetCurrent = async (): Promise<ResponseData<Festival>> => {
  const response = await fetchAPI("/festivals/current", {
    method: "GET",
  });

  return response;
};

export const eventsGetAll = async (): Promise<
  ResponseData<Event<Competition> | Seminar>[]
> => {
  const response = await fetchAPI("/events", {
    method: "GET",
  });

  return response;
};

export const eventsGetByCodename = async (
  codename: string,
): Promise<ResponseData<Event<Competition | Seminar>>> => {
  const response = await fetchAPI(`/events/${codename}`, {
    method: "GET",
  });

  return response;
};

export const eventsGetEventableTypeByCodename = async (
  codename: string,
): Promise<ResponseData<string>> => {
  const response = await fetchAPI(`/events/${codename}/type`, {
    method: "GET",
  });

  return response;
};

export const competitionsGetAll = async (): Promise<
  ResponseData<Event<Competition>[]>
> => {
  const response = await fetchAPI(`/competitions`, {
    method: "GET",
  });

  return response;
};

export const competitionsGetByCodename = async (
  codename: string,
): Promise<ResponseData<Event<Competition>>> => {
  const response = await fetchAPI(`/competitions/${codename}`, {
    method: "GET",
  });

  return response;
};

export const seminarsGetAll = async (): Promise<
  ResponseData<Event<Seminar>[]>
> => {
  const response = await fetchAPI("/seminars", {
    method: "GET",
  });

  return response;
};

export const seminarsGetByCodename = async (
  codename: string,
): Promise<ResponseData<Event<Seminar>>> => {
  const response = await fetchAPI(`/seminars/${codename}`, {
    method: "GET",
  });

  return response;
};

export const faqsGetAll = async (): Promise<ResponseData<Faq[]>> => {
  const response = await fetchAPI(`/faqs`, {
    method: "GET",
  });

  return response;
};

export const avatarsGetAll = async (): Promise<ResponseData<Avatar[]>> => {
  const response = await fetchAPI(`/avatars`, {
    method: "GET",
  });

  return response;
};
