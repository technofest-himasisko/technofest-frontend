import Axios from "axios";
import QueryString from "qs";

export async function fetchAPI(
  path: string,
  options: RequestInit = {},
  params = {},
) {
  const mergedOptions: RequestInit = {
    next: { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
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

const axiosClient = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2`,
  withCredentials: true,
  validateStatus: () => {
    return true;
  },
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default axiosClient;
