import { ApiResponse } from "@/types/ApiResponse";
import { Character } from "@/types/Character";

export type CharacterResponse = ApiResponse<Character, "result">;
