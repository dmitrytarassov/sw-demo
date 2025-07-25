import { persistentAtom } from "@nanostores/persistent";

import { Character } from "@/types/Character";

export const charactersStore = persistentAtom<Record<string, Character>>(
  "sw_characters",
  {},
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  },
);
