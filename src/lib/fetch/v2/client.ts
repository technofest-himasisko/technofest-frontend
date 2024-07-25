import QueryString from "qs";

export async function fetchAPI(
  path: string,
  options: RequestInit = {},
  params = {},
) {
  const mergedOptions = {
    next: { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    ...options,
  };

  const queryString = QueryString.stringify(params);
  const requestUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2${path}${queryString ? `?${queryString}` : ""}`;

  const response = await fetch(requestUrl, mergedOptions);
  const data = await response.json();
  return data;
}
