export async function withLocalStorageValue<T>(
  key: string,
  loader: () => T | Promise<T>,
): Promise<T> {
  const localStorageItem = localStorage.getItem(key);
  if (localStorageItem) {
    try {
      return JSON.parse(localStorageItem) as T;
    } catch {
      // ignore
    }
  }

  const value = await loader();

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore
  }

  return value;
}
