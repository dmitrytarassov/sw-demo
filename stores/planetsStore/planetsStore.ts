import { persistentAtom } from "@nanostores/persistent";

import { Planet } from "@/types/Planet";

export const planetsStore = persistentAtom<Record<string, Planet>>(
  "sw_planets",
  {},
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  },
);
