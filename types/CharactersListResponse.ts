import { ApiResponse } from "@/types/ApiResponse";
import { CharactersListItem } from "@/types/CharactersListItem";
import { CharactersListPayload } from "@/types/CharactersListPayload";

export type CharactersListResponse = ApiResponse<
  CharactersListItem[],
  "results",
  CharactersListPayload
>;
