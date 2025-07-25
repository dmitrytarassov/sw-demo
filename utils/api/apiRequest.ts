import { apiUrl } from "@/constants/apiUrl";
import { withLocalStorageValue } from "@/helpers/withLocalStorageValue";

export const apiRequest = async <T>(pathOrSearchParams: string): Promise<T> => {
  return withLocalStorageValue<T>(pathOrSearchParams, async () => {
    const apiRequestUrl = `${apiUrl}${pathOrSearchParams}`;
    const response = await fetch(apiRequestUrl);
    return await response.json();
  });
};
