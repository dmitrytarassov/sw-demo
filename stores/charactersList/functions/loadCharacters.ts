import {
  MINIMUM_PER_PAGE,
  PER_PAGE_VARIANTS,
} from "@/constants/paginationParams";
import {
  charactersListStateStore,
  charactersListStore,
} from "@/stores/charactersList/charactersListStore";
import { CharactersListResponse } from "@/types/CharactersListResponse";
import { apiRequest } from "@/utils/api/apiRequest";

export async function loadCharacters(_perPage: number = MINIMUM_PER_PAGE) {
  const perPage = PER_PAGE_VARIANTS.includes(_perPage)
    ? _perPage
    : MINIMUM_PER_PAGE;

  const data = await apiRequest<CharactersListResponse>(
    `people/?page=1&limit=${perPage}`,
  );

  charactersListStateStore.set({
    page: 1,
    perPage,
    previous: data.previous,
    next: data.next,
    total_pages: data.total_pages,
    total_records: data.total_records,
  });

  charactersListStore.set(data.results || []);
}
