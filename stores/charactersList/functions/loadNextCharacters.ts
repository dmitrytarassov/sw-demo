import {
  charactersListStateStore,
  charactersListStore,
} from "@/stores/charactersList/charactersListStore";
import { mergeCharactersLists } from "@/stores/charactersList/functions/mergeCharactersLists";
import { CharactersListResponse } from "@/types/CharactersListResponse";
import { apiRequest } from "@/utils/api/apiRequest";

export async function loadNextCharacters() {
  const store = charactersListStateStore.get();
  const list = charactersListStore.get();

  const data = await apiRequest<CharactersListResponse>(
    `people/?page=${store.page + 1}&limit=${store.perPage}`,
  );

  const newList = mergeCharactersLists(list, data.results);
  charactersListStore.set(newList);

  charactersListStateStore.set({
    page: store.page + 1,
    perPage: store.perPage,
    previous: data.previous,
    next: data.next,
    total_pages: data.total_pages,
    total_records: data.total_records,
  });
}
