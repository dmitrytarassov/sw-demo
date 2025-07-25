import { CharactersListPayload } from "@/types/CharactersListPayload";

export type CharactersListStateStore = {
  page: number;
  perPage: number;
} & CharactersListPayload;
