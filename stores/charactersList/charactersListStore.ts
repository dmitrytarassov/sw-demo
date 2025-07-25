import { atom, map } from "nanostores";

import { loadCharacters } from "@/stores/charactersList/functions/loadCharacters";
import { CharactersListStateStore } from "@/stores/charactersList/types/CharactersListStateStore";
import { CharactersListItem } from "@/types/CharactersListItem";

export const charactersListStateStore = map<CharactersListStateStore>({
  page: 1,
  perPage: 10,
  total_records: 0,
  total_pages: 0,
  next: null,
  previous: null,
});

export const charactersListStore = atom<CharactersListItem[]>([]);

charactersListStateStore.listen((newValue, oldValue) => {
  if (newValue.perPage !== oldValue.perPage) {
    void loadCharacters(newValue.perPage);
  }
});
